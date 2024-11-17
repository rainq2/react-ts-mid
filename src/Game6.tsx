import { useState } from 'react';
import { Link } from 'react-router-dom'; // 用於導航
import './Game.css';

const scenes = [
  {
    id: 1,
    text: '春天的池塘邊，鴨媽媽正在孵著蛋，不久後所有的小鴨寶寶都誕生了，但有一顆特別不一樣的蛋，一直都沒有孵出來。過了好幾天，這顆不一樣的蛋終於孵化了，出現了一隻與眾不同的小鴨，大家都嘲笑牠是「醜小鴨」。你的選擇是？',
    options: [
      { text: '接受嘲笑並試圖融入', nextSceneId: 2 },
      { text: '選擇離開池塘流浪', nextSceneId: 3 },
    ],
  },
  {
    id: 2,
    text: '你試圖融入其他小鴨的生活，但牠們始終排擠你。鴨媽媽試著保護你，但你仍感到孤單。',
    options: [
      { text: '選擇離開池塘開始流浪', nextSceneId: 3 },
      { text: '決定留在池塘忍受孤獨', nextSceneId: 4 },
    ],
  },
  {
    id: 3,
    text: '你開始了漫長的流浪旅程，途中經歷了寒冷的冬天，幾乎失去希望。但你堅持下去，尋找自己的歸屬。',
    options: [
      { text: '繼續流浪，尋找新的池塘', nextSceneId: 5 },
      { text: '選擇在洞穴中度過寒冬', nextSceneId: 6 },
    ],
  },
  {
    id: 4,
    text: '你選擇留在池塘忍受孤獨。雖然孤單，但你學會了如何在逆境中成長。最終你找到了自己的價值。',
    options: [],
  },
  {
    id: 5,
    text: '你來到一片新的池塘，遇到了一群天鵝。牠們友善地接納了你，讓你感到溫暖和歸屬感。',
    options: [
      { text: '嘗試融入天鵝群', nextSceneId: 7 },
      { text: '害怕再次被拒絕，選擇離開', nextSceneId: 8 },
    ],
  },
  {
    id: 6,
    text: '在洞穴中度過寒冬後，春天來臨了。你走出了洞穴，看到湖面上倒映的身影，發現自己已經長成了一隻美麗的天鵝！',
    options: [
      { text: '接受自己的新身份，加入天鵝群', nextSceneId: 7 },
    ],
  },
  {
    id: 7,
    text: '你終於找到了自己的歸屬。天鵝群歡迎你的加入，你學會了接受自己，也找到了屬於自己的朋友。',
    options: [],
  },
  {
    id: 8,
    text: '你選擇了離開天鵝群，但心中仍感到遺憾。未來的日子裡，你決定用行動證明自己的價值，並努力成為更好的自己。',
    options: [],
  },
];

const Game6 = () => {
  const [currentSceneId, setCurrentSceneId] = useState(1);

  const currentScene = scenes.find((scene) => scene.id === currentSceneId);

  const handleOptionClick = (nextSceneId?: number) => {
    if (!nextSceneId) {
      alert('故事結束，感謝遊玩！');
    } else {
      setCurrentSceneId(nextSceneId);
    }
  };

  return (
    <div className="game">
      {/* 返回首頁按鈕 */}
      <div className="back-home">
        <Link to="/" className="back-button">
          回首頁
        </Link>
      </div>
      <h1>醜小鴨</h1>
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
        </div>
      ) : (
        <div className="end-message">
          <p>感謝遊玩！</p>
        </div>
      )}
    </div>
  );
};

export default Game6;