import { useState } from 'react';
import { Link } from 'react-router-dom'; // 用於導航
import './Game.css';

const scenes = [
  {
    id: 1,
    text: '樵夫不小心把斧頭掉進湖裡，湖中精靈出現了，手裡拿著一把金斧頭問樵夫：「這是你的斧頭嗎？」',
    options: [
      { text: '說實話：不是', nextSceneId: 2 },
      { text: '撒謊：是我的', nextSceneId: 3 },
    ],
  },
  {
    id: 2,
    text: '精靈讚賞樵夫的誠實，說：「誠實的人值得擁有更多。」然後她拿出另一把銀斧頭，問道：「那這是你的嗎？」',
    options: [
      { text: '繼續誠實：這也不是我的', nextSceneId: 4 },
    ],
  },
  {
    id: 3,
    text: '精靈發現樵夫撒謊，生氣地說：「這把斧頭不是你的！」隨即消失，樵夫的斧頭再也找不回來。',
    options: [
      { text: '感到後悔並反思', nextSceneId: 5 },
    ],
  },
  {
    id: 4,
    text: '精靈大笑說：「你真是個誠實的人！這三把斧頭（金斧頭、銀斧頭和你原本的斧頭）都屬於你了。」',
    options: [
      { text: '感謝精靈並收下斧頭', nextSceneId: 6 },
    ],
  },
  {
    id: 5,
    text: '樵夫後悔自己不誠實，失去了找回斧頭的機會。',
    options: [],
  },
  {
    id: 6,
    text: '樵夫拿著三把斧頭回家，心中充滿了感激，並學會了誠實的價值。',
    options: [],
  },
];

const Game8 = () => {
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
      <h1>金斧頭與銀斧頭</h1>
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

export default Game8;