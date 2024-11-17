import { useState } from "react";
import { Link } from "react-router-dom"; // 用於導航
import "./Game.css";

const scenes = [
  {
    id: 1,
    text: "你是浦島太郎，在海邊釣魚時發現一群小孩正在欺負一隻烏龜。你會怎麼做？",
    options: [
      { text: "幫助烏龜", nextSceneId: 2 },
      { text: "無視牠，繼續釣魚", nextSceneId: 3 },
    ],
  },
  {
    id: 2,
    text: "你趕走了小孩，救了烏龜。烏龜感激地告訴你牠是龍宮城的使者，並邀請你前往龍宮城參觀。你會接受邀請嗎？",
    options: [
      { text: "接受邀請", nextSceneId: 4 },
      { text: "拒絕邀請，回到家中", nextSceneId: 5 },
    ],
  },
  {
    id: 3,
    text: "你選擇無視烏龜，牠傷心地游走了。多年後，你時常想起這件事，感到深深的後悔。",
    options: [],
  },
  {
    id: 4,
    text: "烏龜帶你潛入海底，來到美麗的龍宮城。公主乙姬熱情地款待你，並邀請你參加盛大的宴會。你會參加嗎？",
    options: [
      { text: "參加宴會", nextSceneId: 6 },
      { text: "婉拒邀請，探索龍宮城", nextSceneId: 7 },
    ],
  },
  {
    id: 5,
    text: "你拒絕了烏龜的邀請，選擇繼續平凡的生活。多年後，你成為了一位受人尊敬的漁夫，生活安穩而平靜。",
    options: [],
  },
  {
    id: 6,
    text: "在宴會上，你享受了豐盛的美食和美酒，並與乙姬聊天。最後，乙姬給了你一個神秘的玉匣，並告誡你永遠不要打開它。你會怎麼做？",
    options: [
      { text: "接受玉匣並帶回家", nextSceneId: 8 },
      { text: "違背警告，打開玉匣", nextSceneId: 9 },
    ],
  },
  {
    id: 7,
    text: "你選擇探索龍宮城，發現了許多奇異的海底生物和寶藏。途中，你發現了一個巨大的密室，裡面似乎隱藏著某些秘密。你會進去嗎？",
    options: [
      { text: "進入密室", nextSceneId: 10 },
      { text: "離開密室，回到宴會", nextSceneId: 6 },
    ],
  },
  {
    id: 8,
    text: "你帶著玉匣回到家鄉，卻發現已經過了幾百年。你遵守乙姬的忠告，沒有打開玉匣，最終過上了孤獨但平靜的生活。",
    options: [],
  },
  {
    id: 9,
    text: "當你打開玉匣，一股白煙飄出，你瞬間變得蒼老，失去了所有的青春與力量。乙姬的警告浮現在你的腦海，但為時已晚。",
    options: [],
  },
  {
    id: 10,
    text: "密室裡堆滿了金銀珠寶和古老的卷軸。你會拿走寶藏嗎？",
    options: [
      { text: "拿走寶藏", nextSceneId: 11 },
      { text: "尊重密室，離開", nextSceneId: 12 },
    ],
  },
  {
    id: 11,
    text: "你拿走了密室裡的寶藏，但觸發了龍宮城的守護結界。你被困在龍宮城，再也無法回到陸地。",
    options: [],
  },
  {
    id: 12,
    text: "你選擇不帶走密室裡的任何東西，回到地面後成為了一位講述龍宮城故事的老人，讓更多人了解海底的奇妙世界。",
    options: [],
  },
];

const Game1 = () => {
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
        <Link to="/" className="back-button" onClick={handleBackHome}>
          回首頁
        </Link>
      </div>
      <h1>浦島太郎</h1>
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

export default Game1;