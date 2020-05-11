import React from "react"
import PropTypes from "prop-types"

const Logo = props => (
  <svg
    className={props.className || ""}
    style={props.style || {}}
    width="48"
    height="46"
    viewBox="0 0 48 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.0427551 26.384C0.0427551 25.7013 0.405422 25.0187 1.13075 24.336C1.89875 23.6107 2.73075 22.9707 3.62675 22.416C4.52276 21.8187 5.35476 21.3493 6.12276 21.008C6.93342 20.624 7.40276 20.4107 7.53076 20.368C7.74409 20.2827 7.95742 20.1333 8.17076 19.92C8.42676 19.7067 8.55476 19.536 8.55476 19.408C8.55476 19.3653 8.14942 19.2373 7.33876 19.024C6.52809 18.8107 5.63209 18.448 4.65075 17.936C3.66942 17.424 2.77342 16.6987 1.96276 15.76C1.15209 14.8213 0.746755 13.5627 0.746755 11.984C0.746755 11.0027 0.981422 9.97866 1.45076 8.91199C1.96275 7.84533 2.66676 6.86399 3.56276 5.96799C4.45876 5.07199 5.54676 4.32533 6.82676 3.72799C8.14942 3.13066 9.64276 2.83199 11.3068 2.83199C11.8614 2.83199 12.4588 2.89599 13.0988 3.02399C13.7388 3.10933 14.3148 3.25866 14.8268 3.47199C15.3814 3.68533 15.8294 3.96266 16.1708 4.30399C16.5121 4.64533 16.6828 5.07199 16.6828 5.584C16.6828 5.84 16.5974 6.032 16.4268 6.16C16.2988 6.28799 16.1281 6.45866 15.9148 6.67199C15.4028 6.20266 14.8054 5.84 14.1228 5.584C13.4828 5.32799 12.6508 5.19999 11.6268 5.19999C10.2614 5.19999 9.08809 5.47733 8.10676 6.03199C7.12542 6.54399 6.31476 7.184 5.67476 7.952C5.07742 8.72 4.62942 9.53066 4.33076 10.384C4.03209 11.2373 3.88276 11.984 3.88276 12.624C3.88276 13.3067 4.07476 13.8827 4.45876 14.352C4.88542 14.7787 5.39742 15.1413 5.99476 15.44C6.63476 15.7387 7.31742 15.9947 8.04276 16.208C8.76809 16.4213 9.42942 16.656 10.0268 16.912C10.6668 17.168 11.1788 17.4667 11.5628 17.808C11.9894 18.1493 12.2028 18.576 12.2028 19.088C12.2028 19.6853 11.8614 20.2827 11.1788 20.88C10.4961 21.4347 9.70676 21.9893 8.81076 22.544C7.91476 23.056 7.04009 23.5467 6.18676 24.016C5.33342 24.4853 4.71476 24.912 4.33076 25.296C5.05609 25.2107 5.84542 25.0613 6.69876 24.848C7.59476 24.6347 8.44809 24.4213 9.25876 24.208C10.0694 23.952 10.7948 23.7387 11.4348 23.568C12.0748 23.3547 12.5441 23.248 12.8428 23.248C13.4401 23.248 13.8241 23.3547 13.9948 23.568C14.2081 23.7813 14.3148 24.1653 14.3148 24.72C14.3148 24.9333 14.0801 25.4667 13.6108 26.32C13.1841 27.1733 12.6721 28.112 12.0748 29.136C11.5201 30.16 10.9441 31.1627 10.3468 32.144C9.79209 33.1253 9.40809 33.8293 9.19476 34.256C8.93876 34.7253 8.57609 35.3867 8.10676 36.24C7.63742 37.0933 7.14676 37.968 6.63476 38.864C6.16542 39.7173 5.76009 40.4853 5.41876 41.168C5.07742 41.808 4.90676 42.192 4.90676 42.32C4.90676 42.6187 4.97076 42.8107 5.09875 42.896C5.22676 42.9813 5.35476 43.024 5.48276 43.024C5.78142 43.024 6.42142 42.8533 7.40276 42.512C8.42676 42.1707 9.49342 41.808 10.6028 41.424C11.7548 41.04 12.8214 40.6773 13.8028 40.336C14.8268 39.9947 15.4668 39.824 15.7228 39.824C15.8081 39.824 15.9361 39.952 16.1068 40.208C16.3201 40.464 16.4268 40.6987 16.4268 40.912C16.4268 41.1253 15.9148 41.488 14.8908 42C13.9094 42.5547 12.7148 43.1093 11.3068 43.664C9.89876 44.2613 8.44809 44.7733 6.95476 45.2C5.50409 45.6693 4.30942 45.904 3.37076 45.904C2.81609 45.904 2.32542 45.7333 1.89876 45.392C1.47209 45.0507 1.25876 44.5813 1.25876 43.984C1.25876 43.3867 1.45076 42.6187 1.83475 41.68C2.21876 40.6987 2.70942 39.6533 3.30676 38.544C3.90409 37.392 4.56542 36.2187 5.29076 35.024C6.01609 33.7867 6.69876 32.6347 7.33876 31.568C8.02142 30.5013 8.61876 29.5627 9.13076 28.752C9.64276 27.8987 10.0054 27.28 10.2188 26.896C9.19476 27.2373 8.10676 27.5147 6.95476 27.728C5.80276 27.9413 4.35209 28.048 2.60276 28.048C1.96276 28.048 1.36542 27.9627 0.810755 27.792C0.298755 27.5787 0.0427551 27.1093 0.0427551 26.384Z"
      fill="#FF6E00"
    />
    <path
      d="M44.1293 18.256C44.1293 19.0667 43.7879 19.92 43.1053 20.816C42.4653 21.712 41.7399 22.5653 40.9293 23.376C40.1186 24.1867 39.3719 24.9333 38.6893 25.616C38.0493 26.2987 37.7293 26.8107 37.7293 27.152C37.7293 27.1947 37.9639 27.216 38.4333 27.216C38.9026 27.1733 39.4999 27.1947 40.2253 27.28C40.9506 27.3653 41.7186 27.5147 42.5293 27.728C43.3826 27.9413 44.1719 28.304 44.8973 28.816C45.6226 29.2853 46.2199 29.968 46.6893 30.864C47.1586 31.7173 47.3933 32.8053 47.3933 34.128C47.3933 35.152 47.1799 36.2613 46.7533 37.456C46.3266 38.608 45.6653 39.696 44.7693 40.72C43.8733 41.744 42.7426 42.5973 41.3773 43.28C40.0546 43.9627 38.4759 44.304 36.6413 44.304C35.9159 44.304 35.1906 44.176 34.4653 43.92C33.7826 43.664 33.4413 43.1733 33.4413 42.448C33.4413 42.2773 33.4839 42.128 33.5693 42C33.6973 41.872 33.8253 41.68 33.9533 41.424C34.7213 41.8507 35.5533 42.064 36.4493 42.064C37.8999 42.064 39.1159 41.7867 40.0973 41.232C41.1213 40.6773 41.9319 39.9947 42.5293 39.184C43.1266 38.3733 43.5533 37.52 43.8093 36.624C44.0653 35.6853 44.1933 34.8747 44.1933 34.192C44.1933 33.1253 43.9373 32.336 43.4253 31.824C42.9559 31.2693 42.3586 30.8853 41.6333 30.672C40.9079 30.416 40.0973 30.2667 39.2013 30.224C38.3479 30.1813 37.5586 30.1173 36.8333 30.032C36.1079 29.9467 35.4893 29.776 34.9773 29.52C34.5079 29.264 34.2733 28.7947 34.2733 28.112C34.2733 27.5147 34.5293 26.8747 35.0413 26.192C35.5959 25.4667 36.2146 24.7627 36.8973 24.08C37.6226 23.3973 38.3053 22.736 38.9453 22.096C39.5853 21.456 40.0333 20.9013 40.2893 20.432C39.3506 20.816 38.4333 21.264 37.5373 21.776C36.6413 22.288 35.8093 22.7787 35.0413 23.248C34.3159 23.6747 33.6759 24.0373 33.1213 24.336C32.5666 24.6347 32.1613 24.784 31.9053 24.784C31.6493 24.784 31.3933 24.6773 31.1373 24.464C30.9239 24.2507 30.8173 23.9093 30.8173 23.44C30.8173 23.1413 30.9239 22.5227 31.1373 21.584C31.3506 20.6027 31.5853 19.5573 31.8413 18.448C32.1399 17.3387 32.4173 16.2933 32.6733 15.312C32.9719 14.288 33.1639 13.5413 33.2493 13.072C33.3773 12.56 33.5479 11.856 33.7613 10.96C33.9746 10.064 34.1879 9.14666 34.4013 8.208C34.6573 7.26933 34.8706 6.43733 35.0413 5.71199C35.2119 4.94399 35.2973 4.45333 35.2973 4.23999C35.2973 3.98399 35.2119 3.81333 35.0413 3.72799C34.9133 3.64266 34.8066 3.59999 34.7213 3.59999C34.5933 3.59999 34.0813 3.89866 33.1853 4.49599C32.3319 5.05066 31.3933 5.69066 30.3693 6.41599C29.3453 7.09866 28.3426 7.73866 27.3613 8.33599C26.4226 8.93333 25.8039 9.27466 25.5053 9.35999C25.4199 9.40266 25.2493 9.33866 24.9933 9.168C24.7799 8.95466 24.6306 8.74133 24.5453 8.528C24.5453 8.35733 25.0146 7.84533 25.9533 6.99199C26.8919 6.09599 28.0013 5.15733 29.2813 4.17599C30.5613 3.152 31.8626 2.23466 33.1853 1.424C34.5506 0.613327 35.6599 0.207993 36.5133 0.207993C37.1106 0.207993 37.6013 0.421327 37.9853 0.847996C38.3693 1.232 38.5613 1.872 38.5613 2.76799C38.5613 3.49333 38.4546 4.38933 38.2413 5.45599C38.0706 6.52266 37.8359 7.65333 37.5373 8.848C37.2386 9.99999 36.9186 11.1947 36.5773 12.432C36.2359 13.6267 35.8946 14.7573 35.5533 15.824C35.2546 16.8907 34.9773 17.8293 34.7213 18.64C34.4653 19.4507 34.2946 20.048 34.2093 20.432C34.6786 20.2613 35.2119 19.984 35.8093 19.6C36.4493 19.216 37.1106 18.8533 37.7933 18.512C38.5186 18.128 39.2866 17.808 40.0973 17.552C40.9079 17.2533 41.7399 17.104 42.5933 17.104C42.9346 17.104 43.2759 17.1893 43.6173 17.36C43.9586 17.5307 44.1293 17.8293 44.1293 18.256Z"
      fill="#FF6E00"
    />
  </svg>
)

Logo.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Logo