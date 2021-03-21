import classNames from "@helpers/classNames";

type HiThereSVGProps = {
  className?: string;
  style?: React.CSSProperties;
};

const HiThereSVG: React.FC<HiThereSVGProps> = props => (
  <svg
    className={classNames(props.className)}
    style={props.style || {}}
    width="1099"
    height="231"
    viewBox="0 0 1099 231"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M193.92 27.856C187.008 28.24 181.92 29.008 178.656 30.16C175.584 31.312 173.472 33.52 172.32 36.784C171.168 40.048 170.592 45.328 170.592 52.624V195.472C170.592 202.768 171.168 208.048 172.32 211.312C173.472 214.576 175.584 216.784 178.656 217.936C181.92 219.088 187.008 219.856 193.92 220.24V226C185.856 225.424 173.568 225.136 157.056 225.136C141.504 225.136 129.312 225.424 120.48 226V220.24C127.392 219.856 132.384 219.088 135.456 217.936C138.72 216.784 140.928 214.576 142.08 211.312C143.232 208.048 143.808 202.768 143.808 195.472V126.352H50.208V195.472C50.208 202.768 50.784 208.048 51.936 211.312C53.088 214.576 55.2 216.784 58.272 217.936C61.536 219.088 66.624 219.856 73.536 220.24V226C64.704 225.424 52.512 225.136 36.96 225.136C20.448 225.136 8.16001 225.424 0.0960083 226V220.24C7.00801 219.856 12 219.088 15.072 217.936C18.336 216.784 20.544 214.576 21.696 211.312C22.848 208.048 23.424 202.768 23.424 195.472V52.624C23.424 45.328 22.848 40.048 21.696 36.784C20.544 33.52 18.336 31.312 15.072 30.16C12 29.008 7.00801 28.24 0.0960083 27.856V22.096C8.16001 22.672 20.448 22.96 36.96 22.96C52.32 22.96 64.512 22.672 73.536 22.096V27.856C66.624 28.24 61.536 29.008 58.272 30.16C55.2 31.312 53.088 33.52 51.936 36.784C50.784 40.048 50.208 45.328 50.208 52.624V120.592H143.808V52.624C143.808 45.328 143.232 40.048 142.08 36.784C140.928 33.52 138.72 31.312 135.456 30.16C132.384 29.008 127.392 28.24 120.48 27.856V22.096C129.312 22.672 141.504 22.96 157.056 22.96C173.568 22.96 185.856 22.672 193.92 22.096V27.856Z"
      fill="black"
    />
    <path
      d="M247.153 5.67997C252.145 5.67997 256.465 7.50397 260.113 11.152C263.761 14.8 265.585 19.12 265.585 24.112C265.585 29.104 263.761 33.424 260.113 37.072C256.465 40.72 252.145 42.544 247.153 42.544C242.161 42.544 237.841 40.72 234.193 37.072C230.545 33.424 228.721 29.104 228.721 24.112C228.721 19.12 230.545 14.8 234.193 11.152C237.841 7.50397 242.161 5.67997 247.153 5.67997ZM262.129 199.216C262.129 207.088 263.761 212.56 267.025 215.632C270.289 218.512 275.953 219.952 284.017 219.952V226C266.353 225.232 254.737 224.848 249.169 224.848C243.601 224.848 231.985 225.232 214.321 226V219.952C222.385 219.952 228.049 218.512 231.313 215.632C234.577 212.56 236.209 207.088 236.209 199.216V109.072C236.209 100.24 234.577 93.808 231.313 89.776C228.049 85.744 222.385 83.728 214.321 83.728V77.68C220.465 78.256 226.417 78.544 232.177 78.544C244.273 78.544 254.257 77.2 262.129 74.512V199.216Z"
      fill="black"
    />
    <path
      d="M413.126 77.968H455.75V83.728H413.126V195.184C413.126 203.824 414.662 210.064 417.734 213.904C420.998 217.744 425.606 219.664 431.558 219.664C437.51 219.664 442.598 217.264 446.822 212.464C451.046 207.664 454.598 199.792 457.478 188.848L463.238 190.288C458.438 216.784 445.958 230.032 425.798 230.032C419.27 230.032 413.894 229.264 409.67 227.728C405.446 226.192 401.702 223.792 398.438 220.528C394.214 216.304 391.238 211.12 389.51 204.976C387.974 198.832 387.206 190.576 387.206 180.208V83.728H359.558V77.968H387.206V33.904C397.958 33.52 406.598 32.176 413.126 29.872V77.968Z"
      fill="black"
    />
    <path
      d="M513.787 108.208C518.587 96.112 525.211 87.376 533.659 82C542.299 76.432 551.995 73.648 562.747 73.648C576.187 73.648 586.363 77.296 593.275 84.592C596.923 88.432 599.515 93.232 601.051 98.992C602.587 104.752 603.355 112.528 603.355 122.32V199.216C603.355 207.088 604.987 212.56 608.251 215.632C611.515 218.512 617.179 219.952 625.243 219.952V226C607.579 225.232 596.059 224.848 590.683 224.848C585.307 224.848 574.555 225.232 558.427 226V219.952C565.531 219.952 570.427 218.512 573.115 215.632C575.995 212.56 577.435 207.088 577.435 199.216V115.984C577.435 105.232 575.899 97.072 572.827 91.504C569.755 85.744 563.515 82.864 554.107 82.864C546.235 82.864 539.227 85.072 533.083 89.488C527.131 93.904 522.427 100.144 518.971 108.208C515.515 116.08 513.787 125.008 513.787 134.992V199.216C513.787 207.088 515.131 212.56 517.819 215.632C520.699 218.512 525.691 219.952 532.795 219.952V226C516.667 225.232 505.915 224.848 500.539 224.848C495.163 224.848 483.643 225.232 465.979 226V219.952C474.043 219.952 479.707 218.512 482.971 215.632C486.235 212.56 487.867 207.088 487.867 199.216V35.056C487.867 26.224 486.235 19.792 482.971 15.76C479.707 11.728 474.043 9.71198 465.979 9.71198V3.66398C472.123 4.23997 478.075 4.52797 483.835 4.52797C495.931 4.52797 505.915 3.18397 513.787 0.495972V108.208Z"
      fill="black"
    />
    <path
      d="M762.875 191.44C759.419 202 752.891 211.12 743.291 218.8C733.883 226.288 722.459 230.032 709.019 230.032C695.387 230.032 683.579 226.96 673.595 220.816C663.611 214.48 655.931 205.744 650.555 194.608C645.371 183.28 642.779 170.224 642.779 155.44C642.779 138.736 645.467 124.24 650.843 111.952C656.219 99.664 663.803 90.256 673.595 83.728C683.387 77.008 694.811 73.648 707.867 73.648C725.147 73.648 738.395 78.928 747.611 89.488C757.019 99.856 761.723 115.696 761.723 137.008H671.579C671.003 142.384 670.715 148.528 670.715 155.44C670.715 168.112 672.731 179.152 676.763 188.56C680.987 197.968 686.459 205.264 693.179 210.448C700.091 215.44 707.291 217.936 714.779 217.936C723.995 217.936 732.155 215.728 739.259 211.312C746.363 206.896 752.315 199.504 757.115 189.136L762.875 191.44ZM706.715 79.12C697.691 79.12 689.915 83.536 683.387 92.368C676.859 101.2 672.827 114.256 671.291 131.536H734.075C734.459 116.56 732.251 104.08 727.451 94.096C722.843 84.112 715.931 79.12 706.715 79.12Z"
      fill="black"
    />
    <path
      d="M873.139 73.648C880.819 73.648 887.059 75.856 891.859 80.272C896.851 84.688 899.347 90.064 899.347 96.4C899.347 101.392 897.811 105.712 894.739 109.36C891.859 112.816 887.923 114.544 882.931 114.544C878.707 114.544 875.059 113.2 871.987 110.512C869.107 107.824 867.667 104.176 867.667 99.568C867.667 93.232 870.931 88.048 877.459 84.016C876.115 82.096 874.099 81.136 871.411 81.136C863.923 81.136 857.107 84.112 850.963 90.064C844.819 95.824 840.019 102.928 836.563 111.376C833.107 119.824 831.379 127.792 831.379 135.28V196.336C831.379 205.168 833.875 211.312 838.867 214.768C844.051 218.224 851.731 219.952 861.907 219.952V226L854.995 225.712C835.411 225.136 822.931 224.848 817.555 224.848C812.563 224.848 801.235 225.232 783.571 226V219.952C791.635 219.952 797.299 218.512 800.563 215.632C803.827 212.56 805.459 207.088 805.459 199.216V109.072C805.459 100.24 803.827 93.808 800.563 89.776C797.299 85.744 791.635 83.728 783.571 83.728V77.68C789.715 78.256 795.667 78.544 801.427 78.544C813.523 78.544 823.507 77.2 831.379 74.512V110.512C834.835 100.912 840.307 92.368 847.795 84.88C855.475 77.392 863.923 73.648 873.139 73.648Z"
      fill="black"
    />
    <path
      d="M1031.19 191.44C1027.73 202 1021.2 211.12 1011.6 218.8C1002.2 226.288 990.772 230.032 977.332 230.032C963.7 230.032 951.892 226.96 941.908 220.816C931.924 214.48 924.244 205.744 918.868 194.608C913.684 183.28 911.092 170.224 911.092 155.44C911.092 138.736 913.78 124.24 919.156 111.952C924.532 99.664 932.116 90.256 941.908 83.728C951.7 77.008 963.124 73.648 976.18 73.648C993.46 73.648 1006.71 78.928 1015.92 89.488C1025.33 99.856 1030.04 115.696 1030.04 137.008H939.892C939.316 142.384 939.028 148.528 939.028 155.44C939.028 168.112 941.044 179.152 945.076 188.56C949.3 197.968 954.772 205.264 961.492 210.448C968.404 215.44 975.604 217.936 983.092 217.936C992.308 217.936 1000.47 215.728 1007.57 211.312C1014.68 206.896 1020.63 199.504 1025.43 189.136L1031.19 191.44ZM975.028 79.12C966.004 79.12 958.228 83.536 951.7 92.368C945.172 101.2 941.14 114.256 939.604 131.536H1002.39C1002.77 116.56 1000.56 104.08 995.764 94.096C991.156 84.112 984.244 79.12 975.028 79.12Z"
      fill="black"
    />
    <path
      d="M1079.82 193.168C1084.81 193.168 1089.13 194.992 1092.78 198.64C1096.43 202.288 1098.25 206.608 1098.25 211.6C1098.25 216.592 1096.43 220.912 1092.78 224.56C1089.13 228.208 1084.81 230.032 1079.82 230.032C1074.83 230.032 1070.51 228.208 1066.86 224.56C1063.21 220.912 1061.39 216.592 1061.39 211.6C1061.39 206.608 1063.21 202.288 1066.86 198.64C1070.51 194.992 1074.83 193.168 1079.82 193.168Z"
      fill="black"
    />
  </svg>
);

export default HiThereSVG;
