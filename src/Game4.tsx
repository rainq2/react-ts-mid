import { useState } from "react";
import { Link } from "react-router-dom"; // 用於導航
import "./Game4.css";

const scenes = [
  {
    id: 1,
    text: "在炎熱乾旱的夏天，一隻口渴的烏鴉到處找水喝。牠發現了一個瓶子，但瓶口太小喝不到水。",
    options: [
      { text: "試著撞倒瓶子", nextSceneId: 2 },
      { text: "尋找石頭幫助", nextSceneId: 3 },
    ],
  },
  {
    id: 2,
    text: "烏鴉試著撞倒瓶子，但瓶子紋絲不動。牠累得幾乎放棄。",
    options: [
      { text: "再次嘗試撞倒", nextSceneId: 4 },
      { text: "改變策略尋找石頭", nextSceneId: 3 },
    ],
  },
  {
    id: 3,
    text: "烏鴉找到了一些石頭，牠靈機一動，開始將石頭投入瓶子中。幫助牠丟石頭吧！",
    options: [],
  },
  {
    id: 4,
    text: "烏鴉再次撞擊瓶子，但牠用盡了全力，仍然沒有成功。牠不得不承認這個方法行不通。",
    options: [{ text: "尋找石頭幫助", nextSceneId: 3 }],
  },
  {
    id: 5,
    text: "隨著石頭越來越多，瓶內的水位逐漸上升，烏鴉終於可以喝到水了！",
    options: [
      { text: "思考成功的原因", nextSceneId: 8 },
      { text: "離開瓶子，飛向其他地方", nextSceneId: 9 },
    ],
  },
  {
    id: 8,
    text: "烏鴉回顧自己的成功，發現智慧和堅持是解決困難的關鍵。牠心情愉快地飛走，準備分享這個故事。",
    options: [],
  },
  {
    id: 9,
    text: "烏鴉滿足地離開了瓶子，心想：「只要冷靜思考，總有辦法解決問題。」牠決定繼續旅程。",
    options: [],
  },
];

const Game4 = () => {
  const [currentSceneId, setCurrentSceneId] = useState(1);
  const [waterLevel, setWaterLevel] = useState(10); // 初始水位
  const [stonesAdded, setStonesAdded] = useState(0); // 石頭數量計數
  const [gameMessage, setGameMessage] = useState(""); // 成功訊息
  const maxWaterLevel = 70; // 水位上升的目標高度

  const currentScene = scenes.find((scene) => scene.id === currentSceneId);

  const handleOptionClick = (nextSceneId?: number) => {
    if (!nextSceneId) {
      alert("故事結束，感謝遊玩！");
    } else {
      setCurrentSceneId(nextSceneId);
    }
  };

  // 允許拖放
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // 拖動事件
  const drag = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", event.currentTarget.id);
  };

  // 放置事件
  const drop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("text");
    const itemElement = document.getElementById(itemId);

    if (itemElement && itemElement.classList.contains("stone")) {
      setStonesAdded((prev) => prev + 1); // 增加石頭數量
      setWaterLevel((prev) => Math.min(prev + 25, maxWaterLevel)); // 增加水位但限制最大值
      itemElement.style.display = "none"; // 隱藏石頭

      // 檢查是否達到足夠的水位
      if (stonesAdded + 1 >= 3) {
        setGameMessage("恭喜幫助烏鴉喝到水了！"); // 顯示成功訊息
        setTimeout(() => {
          setCurrentSceneId(5); // 延遲跳轉到完成場景
          setGameMessage(""); // 清空訊息
        }, 2000);
      }
    } else if (itemElement && itemElement.classList.contains("flower")) {
      alert("這不是石頭哦，不能提高水位！");
    }
  };

  return (
    <div className="game">
      <div className="back-home">
        <Link to="/" className="back-button">
          回首頁
        </Link>
      </div>
      <h1>烏鴉喝水</h1>
      {currentScene ? (
        <div className="scene">
          <p>{currentScene.text}</p>
          {currentSceneId === 3 && (
            <div id="scene">
              <div id="bottle" onDrop={drop} onDragOver={allowDrop}>
                <div id="water" style={{ height: `${waterLevel}%` }}></div>
              </div>
              <div
                className="stone"
                draggable="true"
                onDragStart={drag}
                id="stone1"
              >
                石頭1
              </div>
              <div
                className="stone"
                draggable="true"
                onDragStart={drag}
                id="stone2"
              >
                石頭2
              </div>
              <div
                className="stone"
                draggable="true"
                onDragStart={drag}
                id="stone3"
              >
                石頭3
              </div>
              <div
                className="flower"
                draggable="true"
                onDragStart={drag}
                id="flower1"
              >
                花朵
              </div>
              {gameMessage && <p className="success-message">{gameMessage}</p>}
            </div>
          )}
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

export default Game4;