import { useState } from 'react';
import { Link } from 'react-router-dom'; // 用於導航
import './Game.css';

const scenes = [
  {
    id: 1,
    text: '你接到了王宮舞會的消息，這是王子尋找心上人的機會。但繼母要求你完成所有家務才允許你出門。你的選擇是？',
    options: [
      { text: '努力完成所有家務', nextSceneId: 2 },
      { text: '偷偷逃出去', nextSceneId: 3 },
      { text: '請求動物朋友幫忙', nextSceneId: 4 },
    ],
  },
  {
    id: 2,
    text: '你辛苦完成了所有家務，但繼母仍然不讓你參加舞會，並把你鎖在家中。',
    options: [
      { text: '嘗試逃脫', nextSceneId: 5 },
      { text: '感到絕望，放棄參加舞會', nextSceneId: 6 },
    ],
  },
  {
    id: 3,
    text: '你偷偷逃了出去，但在半路上被繼母派出的僕人抓回並關進了小房間。絕望之際，你聽到窗外有動靜。',
    options: [
      { text: '查看窗外的聲音來源', nextSceneId: 7 },
      { text: '放棄抵抗，接受現實', nextSceneId: 6 },
    ],
  },
  {
    id: 4,
    text: '動物朋友聽到你的呼喚，決定幫助你完成家務。你終於有機會去參加舞會！但你需要一件像樣的禮服。',
    options: [
      { text: '向仙女教母求助', nextSceneId: 8 },
      { text: '試著用自己的舊衣服改裝成禮服', nextSceneId: 9 },
    ],
  },
  {
    id: 5,
    text: '你用床單繩索爬出窗戶，但不小心摔倒，腳踝受傷。儘管疼痛，你仍然堅持向舞會方向前進。',
    options: [
      { text: '繼續前往舞會', nextSceneId: 10 },
      { text: '決定回家療傷', nextSceneId: 11 },
    ],
  },
  {
    id: 6,
    text: '你放棄了舞會，選擇接受平凡的生活。多年後，你靠著自己的努力經營了一家小店，生活平靜幸福。',
    options: [],
  },
  {
    id: 7,
    text: '窗外竟然是仙女教母！她被你的努力和善良感動，決定幫助你參加舞會。',
    options: [
      { text: '接受仙女教母的幫助', nextSceneId: 8 },
      { text: '拒絕幫助，選擇靠自己', nextSceneId: 9 },
    ],
  },
  {
    id: 8,
    text: '仙女教母用魔法為你變出了一件美麗的禮服和水晶鞋，還準備了一輛南瓜馬車送你到舞會，但她提醒你，魔法只能維持到午夜。',
    options: [
      { text: '答應遵守規則並前往舞會', nextSceneId: 12 },
      { text: '違背規則，打算冒險留到更晚', nextSceneId: 13 },
    ],
  },
  {
    id: 9,
    text: '你用自己的舊衣服改裝了一件簡單的禮服，雖然並不華麗，但你仍然決定勇敢地前往舞會。',
    options: [
      { text: '自信地走進舞會', nextSceneId: 14 },
      { text: '猶豫不決，選擇在外面觀望', nextSceneId: 15 },
    ],
  },
  {
    id: 10,
    text: '你艱難地來到了舞會，但由於腳踝受傷，你無法跳舞。王子注意到了你的困難，主動過來詢問。',
    options: [
      { text: '向王子坦白你的身份和困境', nextSceneId: 16 },
      { text: '隱瞞真相，離開舞會', nextSceneId: 11 },
    ],
  },
  {
    id: 11,
    text: '你選擇回家療傷，錯過了這次舞會的機會。但你決定努力學習和提升自己，最終成為了一位受人尊敬的老師。',
    options: [],
  },
  {
    id: 12,
    text: '在舞會上，你和王子一見鍾情，兩人度過了一個美好的夜晚。但當午夜鐘聲響起時，你不得不匆忙離開。',
    options: [
      { text: '留下一隻水晶鞋作為線索', nextSceneId: 17 },
      { text: '試圖隱藏自己的蹤跡', nextSceneId: 18 },
    ],
  },
  {
    id: 13,
    text: '午夜過後，魔法失效，你的禮服變回了破舊的衣服，所有人都注視著你。你感到羞愧，匆忙逃離。',
    options: [
      { text: '承認自己的真實身份', nextSceneId: 19 },
      { text: '躲藏起來避免被發現', nextSceneId: 20 },
    ],
  },
  {
    id: 14,
    text: '你的自信吸引了王子的注意，他邀請你共舞。雖然你的禮服不華麗，但你的氣質讓他著迷。',
    options: [
      { text: '接受邀請，與王子跳舞', nextSceneId: 16 },
      { text: '拒絕邀請，選擇保持低調', nextSceneId: 15 },
    ],
  },
  {
    id: 15,
    text: '你選擇在舞會外觀望，看到王子與其他人共舞。雖然有些失落，但你決定努力提升自己，下一次再參與。',
    options: [],
  },
  {
    id: 16,
    text: '你和王子聊了很久，發現彼此有很多共同點。他承諾會找你，並邀請你到王宮共進晚餐。',
    options: [],
  },
  {
    id: 17,
    text: '王子根據留下的水晶鞋找到了你。他向你求婚，你們過上了幸福的生活。',
    options: [],
  },
  {
    id: 18,
    text: '你試圖隱藏自己的蹤跡，但王子仍然通過其他線索找到了你。你們開始了一段浪漫的戀愛旅程。',
    options: [],
  },
  {
    id: 19,
    text: '你大膽地承認了自己的真實身份。王子為你的勇氣感動，決定與你一同面對未來。',
    options: [],
  },
  {
    id: 20,
    text: '你躲藏了起來，避免了尷尬，但錯過了與王子相識的機會。你決心重新開始，未來變得更加自信。',
    options: [],
  },
];

const Game = () => {
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
      <h1>灰姑娘</h1>
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
        </div>
      ) : (
        <div>感謝遊玩！</div>
      )}
    </div>
  );
};

export default Game;