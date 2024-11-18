import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Game from './Game'; // 引入遊戲元件
import Game1 from './Game1';
import Game2 from './Game2';
import Game3 from './Game3';
import Game4 from './Game4';
import Game5 from './Game5';
import Game6 from './Game6';
import Game7 from './Game7';
import Game8 from './Game8';
import book1 from './images/pig.jpg';
import book2 from './images/redhat.jpg';
import book3 from './images/princess.jpg';
import book4 from './images/drinkwater.jpg';
import book5 from './images/tiger.jpg';
import book6 from './images/man.jpg';
import book7 from './images/Duck.png';
import book8 from './images/race.jpg';
import book9 from './images/gold.jpg';
import StoryCard from './StoryCard';

function App() {
  return (
    <Router>
      <Routes>
        {/* 主頁 */}
        <Route
          path="/"
          element={
            <div className="homepage is-preload">
              <div id="page-wrapper">
                <section id="header">
                  <h1>Story Book</h1>
                </section>
                <section id="banner">
                  <header>
                    <h2>Hello! This is a story world.</h2>
                    <p>We hope you can happy at here!</p>
                  </header>
                </section>
                <section id="main">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <section>
                          <header className="major">
                            <h2>My Story</h2>
                          </header>
                          <div className="row">
                            {/* 故事 1 */}
                            <StoryCard image={book1} title={'三隻小豬'} description={'三隻小豬的故事講述了三兄弟各自蓋房子的經歷。大豬和二豬為了省事，分別用稻草和木頭建造房子，而小豬則辛苦地用磚頭蓋了堅固的房子。當大野狼來襲時，稻草和木頭的房子都被輕易摧毀，只有小豬的磚房抵擋住了攻擊，最終三隻小豬在安全的磚房裡團聚，學到了堅持和努力的重要性。'} nevigate={'/game3'}></StoryCard>
                            {/* 故事 2 */}
                            <StoryCard image={book2} title={'小紅帽'} description={'小紅帽的故事講述了一個小女孩帶著食物去看望生病的外婆，途中遇到了一隻狡猾的大野狼。大野狼騙走了小紅帽，趕到外婆家吞下外婆，然後假扮成外婆躺在床上等待小紅帽的到來。小紅帽發現外婆的樣子奇怪，後來被大野狼吞下。幸好獵人及時趕來，成功救出了小紅帽和外婆。'} nevigate={'/game2'}></StoryCard>
                            {/* 故事 3 */}
                            <StoryCard image={book3} title={'灰姑娘'} description={'灰姑娘是被繼母和繼姊妹虐待的善良女孩。王子舉辦舞會時，仙女教母用魔法幫助她變得美麗，並給她南瓜馬車，提醒她午夜前必須離開。灰姑娘在舞會上與王子共舞，兩人墜入愛河，但她在午夜鐘聲響起時匆忙離開，留下了一隻玻璃鞋。王子遍尋全國，最終兩人結婚過上幸福快樂的生活。'} nevigate={'/game'}></StoryCard>
                            {/* 故事 4 */}
                            <StoryCard image={book4} title={'烏鴉喝水'} description={'《烏鴉喝水》的故事講述了一隻口渴的烏鴉發現一個瓶子裡有少量的水，但瓶口狹窄，它無法直接喝到。烏鴉靈機一動，開始一顆一顆地撿石子丟進瓶子裡，水位逐漸上升，最後烏鴉成功喝到了水。這個寓言告訴我們：遇到困難時，要保持冷靜，運用智慧和耐心來解決問題。'} nevigate={'/game4'}></StoryCard>
                            {/* 故事 5 */}
                            <StoryCard image={book5} title={'虎姑婆'} description={'《虎姑婆》是一個流傳於華人社會的民間故事，講述了兩姐弟被父母單獨留在家中時，一隻假扮成老婦人的老虎來敲門，謊稱自己是他們的姑婆，想進屋吃掉他們。機靈的姐姐察覺到虎姑婆的異樣，在夜裡設法保護弟弟並用計逃脫。最後，兩姐弟成功逃離虎姑婆的魔掌，避免了危險。'} nevigate={'/game5'}></StoryCard>
                            {/* 故事 6 */}
                            <StoryCard image={book6} title={'浦島太郎'} description={'浦島太郎的故事講述了一位漁夫浦島太郎，他在海邊救了一隻被欺負的烏龜，後來烏龜帶他到龍宮城，見到了美麗的公主乙姬。浦島太郎在那裡過得非常快樂，但還是決定回到人間。乙姬給了他一個不能打開的神秘寶盒作為告別禮物，回到地面後他打開了寶盒，結果變成了白髮蒼蒼的老人。'} nevigate={'/game1'}></StoryCard>
                            {/* 故事 7 */}
                            <StoryCard image={book7} title={'醜小鴨'} description={'醜小鴨因外貌異於其他小鴨，被大家排擠，孤單地離開家展開旅程。牠歷經寒冬與困難，堅持下來。到了春天，牠在湖中看到自己的倒影，才發現自己原來是一隻美麗的天鵝，不是醜陋的小鴨。這個故事告訴我們，不要因為困境而放棄，每個人都有屬於自己的價值與光芒，未來定能綻放出美麗與力量。'} nevigate={'/game6'}></StoryCard>
                            {/* 故事 8 */}
                            <StoryCard image={book8} title={'龜兔賽跑'} description={'龜兔賽跑講述了一隻兔子和烏龜進行跑步比賽的故事。兔子仗著自己跑得快，途中輕敵休息，甚至睡著了；而烏龜雖然跑得慢，但始終堅持不懈地向前移動。當兔子醒來時，發現烏龜已經到達終點並贏得了比賽。這個故事傳達了一個重要的道理：自滿與輕視他人可能導致失敗，而腳踏實地、持之以恆的努力則能帶來成功。'} nevigate={'/game7'}></StoryCard>
                            {/* 故事 9 */}
                            <StoryCard image={book9} title={'金斧頭銀斧頭'} description={'從前有個樵夫在河邊砍柴，不小心把斧頭掉進河裡。他坐在河邊傷心，河神出現了，問他發生了什麼事。河神潛入水中，先拿出一把金斧頭問樵夫是不是他的，樵夫誠實地說不是；接著，河神拿出銀斧頭，樵夫仍說不是。最後，河神取出樵夫的普通斧頭，樵夫開心地認領。河神讚賞他的誠實，將金斧頭和銀斧頭也送給他。'} nevigate={'/game8'}></StoryCard>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          }
        />
        {/* 遊戲頁面 */}
        <Route path="/game" element={<Game />} />
        <Route path="/game1" element={<Game1 />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="/game3" element={<Game3 />} />
        <Route path="/game4" element={<Game4 />} />
        <Route path="/game5" element={<Game5 />} />
        <Route path="/game6" element={<Game6 />} />
        <Route path="/game7" element={<Game7 />} />
        <Route path="/game8" element={<Game8 />} />
      </Routes>
    </Router>
  );
}

export default App;