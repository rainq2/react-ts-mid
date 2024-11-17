import { useState } from "react";
import { Link } from "react-router-dom"; // 用於導航
import "./Game.css";

const scenes = [
  {
    id: 1,
    text: "夜晚，兩個小孩獨自在家，媽媽出遠門了，叮囑孩子們不要開門給陌生人。突然，門外傳來敲門聲，一個聲音說：“我是你們的姑婆，快開門！”你會怎麼做？",
    options: [
      { text: "開門讓她進來", nextSceneId: 2 },
      { text: "不開門，繼續觀察", nextSceneId: 3 },
    ],
  },
  {
    id: 2,
    text: "你開門讓虎姑婆進來，她看起來像一個慈祥的老人，但身上散發著奇怪的氣味。她說：“孩子們，來，我給你們講故事。”",
    options: [
      { text: "聽她講故事", nextSceneId: 4 },
      { text: "感到不安，決定關心她的來歷", nextSceneId: 5 },
    ],
  },
  {
    id: 3,
    text: "你沒有開門，門外的聲音變得不耐煩了：“快開門，不然我進不來會很傷心啊！”你會怎麼做？",
    options: [
      { text: "繼續不開門", nextSceneId: 6 },
      { text: "假裝打電話給媽媽", nextSceneId: 7 },
    ],
  },
  {
    id: 4,
    text: "她開始講故事，但你注意到她的眼睛一直盯著你們，並且她的指甲看起來像爪子。你感到越來越不對勁。",
    options: [
      { text: "詢問她的真實身份", nextSceneId: 8 },
      { text: "偷偷通知隔壁的鄰居", nextSceneId: 9 },
    ],
  },
  {
    id: 5,
    text: "你問她為什麼來訪，虎姑婆回答：“我是專程來看你們的，怕你們害怕。”但她的笑容越來越詭異。",
    options: [
      { text: "進一步追問", nextSceneId: 8 },
      { text: "以肚子痛為由離開房間", nextSceneId: 10 },
    ],
  },
  {
    id: 6,
    text: "你繼續不開門，門外的聲音變得暴躁，虎姑婆開始用爪子抓門，聲音嚇得你們直發抖。",
    options: [
      { text: "藏在衣櫃裡", nextSceneId: 11 },
      { text: "從窗戶逃出去", nextSceneId: 12 },
    ],
  },
  {
    id: 7,
    text: "你假裝打電話給媽媽，門外的聲音突然安靜了一會兒，但接著變得更加詭異：“打電話也沒用，我可是虎姑婆！”",
    options: [
      { text: "求助鄰居", nextSceneId: 13 },
      { text: "藏在床底下", nextSceneId: 11 },
    ],
  },
  {
    id: 8,
    text: "你直接問她的真實身份，虎姑婆突然變回原形，露出鋒利的牙齒，準備撲向你們！",
    options: [
      { text: "尖叫求助", nextSceneId: 13 },
      { text: "拿起家中的掃帚防身", nextSceneId: 14 },
    ],
  },
  {
    id: 9,
    text: "你偷偷通知了隔壁鄰居，鄰居迅速趕來，用一根棍子把虎姑婆趕走了。你們平安無事。",
    options: [],
  },
  {
    id: 10,
    text: "你以肚子痛為由離開房間，偷偷從後門溜出去，成功逃到鄰居家求助。",
    options: [],
  },
  {
    id: 11,
    text: "你藏在衣櫃裡，但虎姑婆嗅著氣味找到了你們。危急時刻，鄰居聽到聲音趕來救了你們。",
    options: [],
  },
  {
    id: 12,
    text: "你們從窗戶逃出去，跑向鄰居家。鄰居得知後立即報警，虎姑婆被警察趕走了。",
    options: [],
  },
  {
    id: 13,
    text: "你大聲尖叫，鄰居聽到後趕來，虎姑婆被趕跑，你們最終得救了。",
    options: [],
  },
  {
    id: 14,
    text: "你拿起掃帚勇敢反抗，虎姑婆沒有防備，被你趕出門外。你們安全了。",
    options: [],
  },
];

const Game5 = () => {
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
      <h1>虎姑婆</h1>
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

export default Game5;