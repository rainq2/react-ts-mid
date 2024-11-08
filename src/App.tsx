import { useState } from 'react'
import './App.css'
import book1 from './pig.jpg';
import book2 from './redhat.jpg';
import book3 from './princess.jpg';
import book4 from './drinkwater.jpg';
import book5 from './tiger.jpg';
import book6 from './man.jpg';

function App() {
  return (
    <>
      <body className="homepage is-preload">
        <div id="page-wrapper">
          <section id="header">
          {/* Logo */}
            <h1>Story Book</h1> 
          </section>    
          {/* Banner */}
          <section id="banner">
            <header>
              <h2>Hello! This is a story world.</h2>
              <p>We hope you can happy at here!</p>
            </header>
          </section>
          {/* Main */}
          <section id="main">
            <div className="container">
              <div className="row">
                <div className="col-12">
                {/* Story */}
                  <section>
                    <header className="major">
                      <h2>My Story</h2>
                    </header>
                    <div className="row">
                      <div className="col-4 col-6-medium col-12-small">
                        <section className="box">
                          <a href="#" className="image featured"><img src={book1} alt="" /></a>
                          <header>
                            <h3>三隻小豬</h3>
                          </header>
                          <p>三隻小豬的故事講述了三兄弟各自蓋房子的經歷。大豬和二豬為了省事，分別用稻草和木頭建造房子，而小豬則辛苦地用磚頭蓋了堅固的房子。當大野狼來襲時，稻草和木頭的房子都被輕易摧毀，只有小豬的磚房抵擋住了攻擊，最終三隻小豬在安全的磚房裡團聚，學到了堅持和努力的重要性。</p>
                          <footer>
                            <ul className="actions">
                              <li><a href="#" className="button alt">Read & Play</a></li>
                            </ul>
                          </footer>
                        </section>
                      </div>
                      <div className="col-4 col-6-medium col-12-small">
                        <section className="box">
                          <a href="#" className="image featured"><img src={book2} alt="" /></a>
                          <header>
                            <h3>小紅帽</h3>
                          </header>
                          <p>小紅帽的故事講述了一個小女孩帶著食物去看望生病的外婆，途中遇到了一隻狡猾的大野狼。大野狼騙走了小紅帽，趕到外婆家吞下外婆，然後假扮成外婆躺在床上等待小紅帽的到來。小紅帽發現外婆的樣子奇怪，後來被大野狼吞下。幸好獵人及時趕來，成功救出了小紅帽和外婆。</p>
                          <footer>
                            <ul className="actions">
                              <li><a href="#" className="button alt">Read & Play</a></li>
                            </ul>
                          </footer>
                        </section>
                      </div>
                      <div className="col-4 col-6-medium col-12-small">
                        <section className="box">
                          <a href="#" className="image featured"><img src={book3} alt="" /></a>
                          <header>
                            <h3>灰姑娘</h3>
                          </header>
                          <p>灰姑娘是被繼母和繼姊妹虐待的善良女孩。王子舉辦舞會時，仙女教母用魔法幫助她變得美麗，並給她南瓜馬車，提醒她午夜前必須離開。灰姑娘在舞會上與王子共舞，兩人墜入愛河，但她在午夜鐘聲響起時匆忙離開，留下了一隻玻璃鞋。王子遍尋全國，最終兩人結婚過上幸福快樂的生活。</p>
                          <footer>
                            <ul className="actions">
                              <li><a href="#" className="button alt">Read & Play</a></li>
                            </ul>
                          </footer>
                        </section>
                      </div>
                      <div className="col-4 col-6-medium col-12-small">
                        <section className="box">
                          <a href="#" className="image featured"><img src={book4} alt="" /></a>
                          <header>
                            <h3>烏鴉喝水</h3>
                          </header>
                          <p>《烏鴉喝水》的故事講述了一隻口渴的烏鴉發現一個瓶子裡有少量的水，但瓶口狹窄，它無法直接喝到。烏鴉靈機一動，開始一顆一顆地撿石子丟進瓶子裡，水位逐漸上升，最後烏鴉成功喝到了水。這個寓言告訴我們：遇到困難時，要保持冷靜，運用智慧和耐心來解決問題。</p>
                          <footer>
                            <ul className="actions">
                              <li><a href="#" className="button alt">Read & Play</a></li>
                            </ul>
                          </footer>
                        </section>
                      </div>
                      <div className="col-4 col-6-medium col-12-small">
                        <section className="box">
                          <a href="#" className="image featured"><img src={book5} alt="" /></a>
                          <header>
                            <h3>虎姑婆</h3>
                          </header>
                          <p>《虎姑婆》是一個流傳於華人社會的民間故事，講述了兩姐弟被父母單獨留在家中時，一隻假扮成老婦人的老虎來敲門，謊稱自己是他們的姑婆，想進屋吃掉他們。機靈的姐姐察覺到虎姑婆的異樣，在夜裡設法保護弟弟並用計逃脫。最後，兩姐弟成功逃離虎姑婆的魔掌，避免了危險。</p>
                          <footer>
                            <ul className="actions">
                              <li><a href="#" className="button alt">Read & Play</a></li>
                            </ul>
                          </footer>
                        </section>
                      </div>
                      <div className="col-4 col-6-medium col-12-small">
                        <section className="box">
                          <a href="#" className="image featured"><img src={book6} alt="" /></a>
                          <header>
                            <h3>浦島太郎</h3>
                          </header>
                          <p>浦島太郎的故事講述了一位漁夫浦島太郎，他在海邊救了一隻被欺負的烏龜，後來烏龜帶他到龍宮城，見到了美麗的公主乙姬。浦島太郎在那裡過得非常快樂，但還是決定回到人間。乙姬給了他一個不能打開的神秘寶盒作為告別禮物，回到地面後他打開了寶盒，結果變成了白髮蒼蒼的老人。</p>
                          <footer>
                            <ul className="actions">
                              <li><a href="#" className="button alt">Read & Play</a></li>
                            </ul>
                          </footer>
                        </section>
                      </div>
                    </div>
                  </section>   
                </div> 
              </div>
            </div>
          </section>
        </div>    
      </body>
    </>
  )
}

export default App
