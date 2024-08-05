import React from "react";
import "./HomePage.css";
import img11 from "../images/img11.png";
import img1 from "../images/img1.png";
import img7 from "../images/img7.png";
import img5 from "../images/img5.png";
import img21 from "../images/img21.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img6 from "../images/img6.png";
import imgll from "../images/imgll.png";
import coinbase from "../images/coinbase.png";
import imgGraph from "../images/imgGarph.png";
import graph from "../images/mainGarph.png";
import circularimg from "../images/circularImg.png";
import eyeLogo from "../images/eyeLogo.png";
import picAd from "../images/picAd.png";
import pigLogo from "../images/pigLogo.png";
import refferalLogo from "../images/refferalLogo.png";
import swapLogo from "../images/swapLogo.png";
import walletLogo from "../images/walletLogo.png";
import usdBtn from '../images/usdBtn.png'
const HomePage = () => {
  return (
    <div className="container">
      <div className="section-left">
        <img src={img11} />
        <img src={img1} />
        <img src={img7} />
        <img src={img5} />
        <img src={img21} />
        <img src={img3} />
      </div>

      <div className="section-right">
        <div className="header-section">
          <div className="over-view-label">
            <h2>Overview</h2>
          </div>

          <div className="header-image-sec">
            <img src={img4} />
            <img src={img6} />
            <div className="header-profile-sec">
              <p>Welcome back,John</p>
              <p>myemailaddress@example.com</p>
            </div>
          </div>
        </div>

        <div className="header-secion-second">
          <div className="header-second-logo">
            <img src={imgll} />
            <p>Binance</p>
          </div>

          <div className="price-tag">
            <p>Price:</p>
            <p>$123,455</p>
          </div>

          <div className="price-tag">
            <p>24hr Volume:</p>
            <p>$123,455</p>
          </div>

          <div className="price-tag">
            <p>24hr Change:</p>
            <p>-23.00%</p>
          </div>

          <div className="price-tag">
            <p>Market Cap:</p>
            <p>2346B</p>
          </div>

          <div className="header-coinbase-logo">
            <img src={coinbase} />
            <p>coinbase</p>
          </div>
        </div>

        <div className="middle-section">
          <div className="middle-sec-first">
            <div className="midle-section-first-half">
              <p>Assests Net Worth</p>

              <div className="btn-grps">
                <button>+$123,90,90.98</button>
                <button>1D</button>
                <button>1W</button>
                <button>1M</button>
                <button>1Y</button>
              </div>

              <div>
                <div className="graph-bg">
                  <img src={imgGraph} />
                  <div className="graph">
                    <img src={graph} />
                  </div>
                </div>
              </div>
            </div>

            <div className="midle-section-second-half">
              <p>Wallets</p>
              <div className="circular-graph">
                <img src={circularimg} />
                <div className="circular-graph-text">
                  <button>Wallet</button>
                  <p>26</p>
                  <p>Total</p>
                  <p>Wallet</p>
                </div>
              </div>
              <div className="list-data-section">
                <div className="list-data-sub-section">
                  <div className="info-container">
                    <div className="info-class">
                      <div className="dot"></div>
                      <p className="text-label">BNB Wallet</p>
                    </div>
                    <p className="info-te">153 Users</p>
                  </div>
                   

                  <div className="info-container">
                    <div className="info-class">
                      <div className="dot"></div>
                      <p className="text-label">BNB Wallet</p>
                    </div>
                    <p className="info-te">153 Users</p>
                  </div>
                </div>
              </div>

              <div className="list-data-section">
                <div className="list-data-sub-section">
                  <div className="info-container">
                    <div className="info-class">
                      <div className="dot"></div>
                      <p className="text-label">BNB Wallet</p>
                    </div>
                    <p className="info-te">153 Users</p>
                  </div>
                  {/* <div>
                    <p>BNB Wallet</p>
                    <p>153 Users</p>
                  </div> */}

                  <div className="info-container">
                    <div className="info-class">
                      <div className="dot"></div>
                      <p className="text-label">BNB Wallet</p>
                    </div>
                    <p className="info-te">153 Users</p>
                  </div>
                </div>
                {/* <div className="list-data-sub-section"><p>BNB Wallet</p><p>153 Users</p></div>
                        <div className="list-data-sub-section"><p>BNB Wallet</p><p>153 Users</p></div>
                        <div className="list-data-sub-section"><p>BNB Wallet</p><p>153 Users</p></div>
                        <div className="list-data-sub-section"><p>BNB Wallet</p><p>153 Users</p></div>
                        <div className="list-data-sub-section"><p>BNB Wallet</p><p>153 Users</p></div>
                        <div className="list-data-sub-section"><p>BNB Wallet</p><p>153 Users</p></div>
                        <div className="list-data-sub-section"><p>BNB Wallet</p><p>153 Users</p></div> */}
              </div>
              <div className="list-data-section">
                <div className="list-data-sub-section">
                  <div className="info-container">
                    <div className="info-class">
                      <div className="dot"></div>
                      <p className="text-label">BNB Wallet</p>
                    </div>
                    <p className="info-te">153 Users</p>
                  </div>
                  {/* <div>
                    <p>BNB Wallet</p>
                    <p>153 Users</p>
                  </div> */}

                  <div className="info-container">
                    <div className="info-class">
                      <div className="dot"></div>
                      <p className="text-label">BNB Wallet</p>
                    </div>
                    <p className="info-te">153 Users</p>
                  </div>
                </div>
                {/* <div className="list-data-sub-section"><p>BNB Wallet</p><p>153 Users</p></div>
                        <div className="list-data-sub-section"><p>BNB Wallet</p><p>153 Users</p></div>
                        <div className="list-data-sub-section"><p>BNB Wallet</p><p>153 Users</p></div>
                        <div className="list-data-sub-section"><p>BNB Wallet</p><p>153 Users</p></div>
                        <div className="list-data-sub-section"><p>BNB Wallet</p><p>153 Users</p></div>
                        <div className="list-data-sub-section"><p>BNB Wallet</p><p>153 Users</p></div>
                        <div className="list-data-sub-section"><p>BNB Wallet</p><p>153 Users</p></div> */}
              </div>
              <div className="list-data-section">
                <div className="list-data-sub-section">
                  <div className="info-container">
                    <div className="info-class">
                      <div className="dot"></div>
                      <p className="text-label">BNB Wallet</p>
                    </div>
                    <p className="info-te">153 Users</p>
                  </div>
                  {/* <div>
                    <p>BNB Wallet</p>
                    <p>153 Users</p>
                  </div> */}

                  <div className="info-container">
                    <div className="info-class">
                      <div className="dot"></div>
                      <p className="text-label">BNB Wallet</p>
                    </div>
                    <p className="info-te">153 Users</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="user-section">
              <div className="user-label">
                <p>Registered Users</p>
                <button>Create Account +</button>
              </div>

              <div className="user-details-status">
                <button>Name</button>
                <button>Mobile</button>
                <button>Wallets</button>
                <button>Date/Time</button>
                <button>Status</button>
              </div>

              <div className="user-details-full">
                <p>Username1</p>
                <p>7656561717</p>
                <p>1</p>
                <p>19/09/2021</p>
                <button>Active</button>
              </div>

              <div className="user-details-full">
                <p>Username1</p>
                <p>7656561717</p>
                <p>1</p>
                <p>19/09/2021</p>
                <button>Active</button>
              </div>

              <div className="user-details-full">
                <p>Username1</p>
                <p>7656561717</p>
                <p>1</p>
                <p>19/09/2021</p>
                <button>Active</button>
              </div>
            </div>
          </div>

          <div className="middle-sec-sec">
            <img src={picAd} />
            <div className="side-button">
              <button>PNL Analysis</button>
            </div>
            <div>
              <div className="ad-section-second">
                <div className="ad-eye-logo">
                  <img src={eyeLogo} /> <p>Total Value(ALZ)</p>
                </div>
                <div>
                <div class="dropdown">
         
        <select id="myDropdown">
            <option value="option1">USD</option>
            <option value="option2">IND</option>
            <option value="option3">DH</option>
            <option value="option4">TY</option>
        </select>
    </div>
                </div>
              </div>
              <div className="amount-section">
                <p>129,00.000</p>
                <p>~$898,090.000</p>
              </div>

              <div className="circular-ad">
                <img src={pigLogo} />
                <img src={refferalLogo} />
                <img src={swapLogo} />
                <img src={walletLogo} />
              </div>

              <div className="ad-card-section">
                <div className="ad-card-sub-section">
                  <p>Today's PNL</p>
                  <p>-0.34%</p>
                  <p>-$34.00</p>
                  <button>7 days</button>
                </div>

                <div className="ad-card-sub-section">
                  <p>Today's PNL</p>
                  <p>-0.34%</p>
                  <p>-$34.00</p>
                  <button>7 days</button>
                </div>

                <div className="ad-card-sub-section">
                  <p>Today's PNL</p>
                  <p>-0.34%</p>
                  <p>-$34.00</p>
                  <button>7 days</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
