import { useState } from 'react';
import { Link } from 'react-router-dom'; // 用於導航
import './Game.css';

const scenes = [
  {
    id: 1,
    text: '兔子和烏龜開始比賽，兔子跑得很快，烏龜慢慢爬。兔子看了看後面，烏龜離得還很遠。',
    options: [
      { text: '兔子決定休息一下', nextSceneId: 2 },
      { text: '兔子繼續往前跑', nextSceneId: 3 },
    ],
  },
  {
    id: 2,
    text: '兔子找了棵大樹，坐下來休息，覺得烏龜絕對追不上牠。',
    options: [
      { text: '兔子睡著了', nextSceneId: 4 },
      { text: '兔子繼續監視烏龜的進度', nextSceneId: 5 },
    ],
  },
  {
    id: 3,
    text: '兔子一路狂奔，到了終點附近，卻因太驕傲而摔倒了！',
    options: [
      { text: '嘗試站起來追趕', nextSceneId: 6 },
      { text: '放棄比賽，承認失敗', nextSceneId: 7 },
    ],
  },
  {
    id: 4,
    text: '兔子睡著了，烏龜慢慢地超越了牠。',
    options: [
      { text: '兔子醒來後開始追趕', nextSceneId: 6 },
      { text: '兔子放棄比賽', nextSceneId: 7 },
    ],
  },
  {
    id: 5,
    text: '兔子看著烏龜一步步向前，心想這速度根本不可能贏過自己。',
    options: [
      { text: '繼續觀望並休息', nextSceneId: 4 },
      { text: '重新開始跑起來', nextSceneId: 3 },
    ],
  },
  {
    id: 6,
    text: '兔子拼命追趕，但烏龜憑著堅持和穩定的步伐，贏得了比賽！',
    options: [
      { text: '兔子祝賀烏龜並承認自己的錯誤', nextSceneId: 8 },
    ],
  },
  {
    id: 7,
    text: '兔子輸掉了比賽，牠開始思考自己失敗的原因。',
    options: [
      { text: '兔子學會了謙虛和努力的重要性', nextSceneId: 8 },
    ],
  },
  {
    id: 8,
    text: '這次比賽教會了我們，堅持和穩定比驕傲和懶惰更重要。',
    options: [],
  },
];

const Game7 = () => {
  const [currentSceneId, setCurrentSceneId] = useState(1);

  const currentScene = scenes.find((scene) => scene.id === currentSceneId);

  const handleOptionClick = (nextSceneId?: number) => {
    if (!nextSceneId) {
      alert('故事結束，感謝遊玩！');
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
      <h1>龜兔賽跑</h1>
      {/* 當前場景內容 */}
      {currentScene ? (
        <div className="scene">
          <p>{currentScene.text}</p>
          <div className="options">
            {currentScene.options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleOptionClick(option.nextSceneId)}
              >
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
        <div className="end-message">
          <p>感謝遊玩！</p>
        </div>
      )}
    </div>
  );
};

export default Game7;