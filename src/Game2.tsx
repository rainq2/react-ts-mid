import { useState } from "react";
import { Link } from "react-router-dom"; // 用於導航
import "./Game.css";

const scenes = [
  {
    id: 1,
    text: "小紅帽的媽媽請她把一籃點心送到外婆家，但叮囑她不要走小路，因為那裡可能有危險的狼。小紅帽出發了。你會選擇哪條路？",
    options: [
      { text: "走大路", nextSceneId: 2 },
      { text: "走小路", nextSceneId: 3 },
    ],
  },
  {
    id: 2,
    text: "你選擇走大路，一路上風景優美，沒有遇到任何危險。很快你就到達了外婆家。",
    options: [
      { text: "進入外婆家", nextSceneId: 4 },
      { text: "先在附近採些野花再進去", nextSceneId: 5 },
    ],
  },
  {
    id: 3,
    text: "你選擇走小路，途中遇到了一隻大灰狼。大灰狼對你說：“小姑娘，你去哪裡啊？”",
    options: [
      { text: "誠實告訴他", nextSceneId: 6 },
      { text: "撒謊說自己回家去", nextSceneId: 7 },
    ],
  },
  {
    id: 4,
    text: "你進入外婆家，但發現外婆的聲音聽起來有點奇怪。你注意到床上的“外婆”似乎有些不同。",
    options: [
      { text: "問外婆為什麼看起來怪怪的", nextSceneId: 8 },
      { text: "靠近仔細觀察", nextSceneId: 9 },
    ],
  },
  {
    id: 5,
    text: "你在附近採了一些美麗的野花，但大灰狼趁機先一步來到了外婆家。當你回到外婆家時，門開著，裡面傳來奇怪的聲音。",
    options: [
      { text: "勇敢進去查看", nextSceneId: 10 },
      { text: "轉身回家找媽媽求助", nextSceneId: 11 },
    ],
  },
  {
    id: 6,
    text: "你誠實地告訴大灰狼你要去外婆家，他露出了詭異的微笑，並建議你採一些野花給外婆。你怎麼做？",
    options: [
      { text: "採野花再走", nextSceneId: 5 },
      { text: "直接前往外婆家", nextSceneId: 12 },
    ],
  },
  {
    id: 7,
    text: "你撒謊說自己要回家去，大灰狼雖然有些疑惑，但還是放過了你。你繼續前往外婆家。",
    options: [
      { text: "加快腳步趕路", nextSceneId: 12 },
      { text: "放慢腳步，享受森林風景", nextSceneId: 5 },
    ],
  },
  {
    id: 8,
    text: "你問外婆為什麼聲音聽起來怪怪的。她回答：“因為感冒了。”但你發現她的眼睛也特別大。",
    options: [
      { text: "繼續詢問外婆", nextSceneId: 13 },
      { text: "感到害怕，準備逃走", nextSceneId: 14 },
    ],
  },
  {
    id: 9,
    text: "你靠近後發現床上的“外婆”其實是大灰狼！它突然跳起來撲向你！",
    options: [
      { text: "尖叫求助", nextSceneId: 15 },
      { text: "勇敢與大灰狼對抗", nextSceneId: 16 },
    ],
  },
  {
    id: 10,
    text: "你勇敢地進入外婆家，發現外婆被綁在角落，而大灰狼正在穿著她的衣服坐在床上。",
    options: [
      { text: "試圖救出外婆", nextSceneId: 17 },
      { text: "逃出去尋求幫助", nextSceneId: 18 },
    ],
  },
  {
    id: 11,
    text: "你回家找媽媽求助，媽媽立刻通知了獵人，獵人趕到外婆家，救下了外婆，並趕走了大灰狼。",
    options: [],
  },
  {
    id: 12,
    text: "你加快腳步趕到外婆家，但發現門開著，裡面傳來奇怪的聲音。",
    options: [
      { text: "勇敢進去查看", nextSceneId: 10 },
      { text: "轉身回家求助", nextSceneId: 11 },
    ],
  },
  {
    id: 13,
    text: "你繼續詢問外婆，終於發現她的牙齒也特別尖！這時，大灰狼露出了真面目！",
    options: [
      { text: "試圖逃跑", nextSceneId: 14 },
      { text: "呼叫獵人幫助", nextSceneId: 19 },
    ],
  },
  {
    id: 14,
    text: "你試圖逃跑，但大灰狼速度很快，最終你被抓住了。幸好，獵人及時趕到，救下了你和外婆。",
    options: [],
  },
  {
    id: 15,
    text: "你的尖叫聲引來了獵人，他衝進來救下了你和外婆，並把大灰狼趕跑。",
    options: [],
  },
  {
    id: 16,
    text: "你勇敢地拿起身邊的椅子與大灰狼對抗，成功拖延了時間，讓獵人趕到並救下了你和外婆。",
    options: [],
  },
  {
    id: 17,
    text: "你試圖救出外婆，但大灰狼發現了你，向你撲來。危急時刻，獵人衝進來，救下了你和外婆。",
    options: [],
  },
  {
    id: 18,
    text: "你逃出去尋求幫助，遇到了獵人，獵人迅速趕到外婆家，救出了外婆並趕走了大灰狼。",
    options: [],
  },
  {
    id: 19,
    text: "你大聲呼喊，獵人聽到後趕到現場，救下了你和外婆，並制服了大灰狼。",
    options: [],
  },
];

const Game2 = () => {
  const [currentSceneId, setCurrentSceneId] = useState(1);

  const currentScene = scenes.find((scene) => scene.id === currentSceneId);

  const handleOptionClick = (nextSceneId?: number) => {
    if (!nextSceneId) {
      alert("故事結束，感謝遊玩！");
    } else {
      setCurrentSceneId(nextSceneId);
    }
  };

  const handleReadAloud = () => {
    if (currentScene) {
      const utterance = new SpeechSynthesisUtterance(currentScene.text);
      utterance.lang = 'zh-TW'; // 設置語言為中文（繁體）
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleBackHome = () => {
    window.speechSynthesis.cancel(); // 停止
  };

  return (
    <div className="game">
      {/* 返回首頁按鈕 */}
      <div className="back-home">
        <Link to="/" className="back-button"　onClick={handleBackHome}>
          回首頁
        </Link>
      </div>
      <h1>小紅帽</h1>
      {currentScene ? (
        <div className="scene">
          <p>{currentScene.text}</p>
          <div className="options">
            {currentScene.options.map((option, index) => (
              <button key={index} onClick={() => handleOptionClick(option.nextSceneId)}>
                {option.text}
              </button>
            ))}
          </div>
          {/* 朗讀按鈕 */}
          <button onClick={handleReadAloud} className="read-aloud-button">
            朗讀
          </button>
        </div>
      ) : (
        <div>感謝遊玩！</div>
      )}
    </div>
  );
};

export default Game2;