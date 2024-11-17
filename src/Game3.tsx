import { useState } from "react";
import { Link } from "react-router-dom"; // 用於導航
import "./Game.css";

const scenes = [
  {
    id: 1,
    text: "三隻小豬決定各自建造自己的房子，來抵禦大灰狼的襲擊。第一隻小豬選擇了稻草，第二隻小豬選擇了木頭，第三隻小豬選擇了磚頭。你是第一隻小豬，你會用稻草建造房子嗎？",
    options: [
      { text: "是的，用稻草建房子", nextSceneId: 2 },
      { text: "不，我改用木頭建房子", nextSceneId: 3 },
      { text: "不，我改用磚頭建房子", nextSceneId: 4 },
    ],
  },
  {
    id: 2,
    text: "你快速地用稻草建好了房子，但稻草房子看起來並不堅固。不久，大灰狼來了，他開始吹氣。",
    options: [
      { text: "逃跑到第二隻小豬的木頭房子", nextSceneId: 5 },
      { text: "堅持待在稻草房子裡", nextSceneId: 6 },
    ],
  },
  {
    id: 3,
    text: "你選擇了用木頭建造房子，房子看起來比稻草房子堅固得多。不久，大灰狼來了，他開始吹氣。",
    options: [
      { text: "逃跑到第三隻小豬的磚頭房子", nextSceneId: 7 },
      { text: "躲在木頭房子裡，試著對抗大灰狼", nextSceneId: 8 },
    ],
  },
  {
    id: 4,
    text: "你選擇用磚頭建造房子，房子堅固耐用，讓大灰狼難以破壞。不久，大灰狼來到你的房子外，他開始試著吹氣。",
    options: [
      { text: "堅持留在磚頭房子裡", nextSceneId: 9 },
      { text: "嘗試反擊大灰狼", nextSceneId: 10 },
    ],
  },
  {
    id: 5,
    text: "你逃到了第二隻小豬的木頭房子。大灰狼也追來了，他開始吹木頭房子。",
    options: [
      { text: "一起逃到第三隻小豬的磚頭房子", nextSceneId: 7 },
      { text: "躲在木頭房子裡，試著對抗大灰狼", nextSceneId: 8 },
    ],
  },
  {
    id: 6,
    text: "你選擇留在稻草房子裡，但大灰狼一口氣就把房子吹垮了。你不得不逃跑，最終與其他小豬會合。",
    options: [
      { text: "逃到木頭房子", nextSceneId: 5 },
      { text: "直接逃到磚頭房子", nextSceneId: 7 },
    ],
  },
  {
    id: 7,
    text: "你和其他小豬一起逃到了第三隻小豬的磚頭房子。大灰狼試圖吹倒磚頭房子，但他的力氣用完了，房子紋絲不動。",
    options: [
      { text: "留在磚頭房子裡等待狼離開", nextSceneId: 11 },
      { text: "設陷阱捕捉大灰狼", nextSceneId: 12 },
    ],
  },
  {
    id: 8,
    text: "你選擇留在木頭房子裡，但大灰狼吹倒了木頭房子。幸運的是，你及時逃跑，最終到達了磚頭房子。",
    options: [
      { text: "與其他小豬一起留在磚頭房子", nextSceneId: 11 },
      { text: "與第三隻小豬設陷阱反擊", nextSceneId: 12 },
    ],
  },
  {
    id: 9,
    text: "你堅持待在磚頭房子裡。大灰狼試圖從煙囪進入，但你點燃了火堆，大灰狼被燙傷逃跑了。",
    options: [],
  },
  {
    id: 10,
    text: "你選擇反擊，與其他小豬合作設置陷阱，成功制服了大灰狼，並將他趕出了森林。",
    options: [],
  },
  {
    id: 11,
    text: "你選擇留在磚頭房子裡等待，最終大灰狼無計可施，只能灰溜溜地離開了。",
    options: [],
  },
  {
    id: 12,
    text: "你和其他小豬一起設置了一個陷阱，大灰狼不小心掉進了陷阱裡，狼被趕出了森林，小豬們過上了幸福的生活。",
    options: [],
  },
];

const Game3 = () => {
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
      <h1>三隻小豬</h1>
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

export default Game3;