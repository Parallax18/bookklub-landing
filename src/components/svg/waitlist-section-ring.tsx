import React, { SVGProps } from "react";
import { motion } from "framer-motion";

const WaitlistSectionRing = (props: SVGProps<SVGSVGElement>) => {
  const bounceVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <svg
      {...props}
      width="323"
      height="200"
      viewBox="0 0 323 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M175.5 129C200.068 129 222.459 123.544 238.815 114.571C255.061 105.659 266 92.8585 266 78C266 63.1415 255.061 50.3408 238.815 41.4286C222.459 32.4563 200.068 27 175.5 27C150.932 27 128.541 32.4563 112.185 41.4286C95.9392 50.3408 85 63.1415 85 78C85 92.8585 95.9392 105.659 112.185 114.571C128.541 123.544 150.932 129 175.5 129Z"
        stroke="#599B7B"
        stroke-width="6"
      />

      {/* First bubble - Read */}
      <motion.g variants={bounceVariants} animate="animate">
        <g filter="url(#filter0_d_936_3035)">
          <rect
            x="41.7722"
            y="59"
            width="97"
            height="39"
            rx="19.5"
            transform="rotate(10 41.7722 59)"
            fill="#95D7B7"
          />
          <path
            d="M68.0466 89.0184L72.4263 78.093L74.2069 78.407L69.8271 89.3324L68.0466 89.0184ZM63.2723 88.1766L67.6362 77.2484L69.4168 77.5623L65.0528 88.4906L63.2723 88.1766ZM62.1309 85.0672L62.4282 83.3812L73.6471 85.3594L73.3498 87.0454L62.1309 85.0672ZM63.6328 81.1566L63.93 79.4706L75.1647 81.4515L74.8674 83.1375L63.6328 81.1566ZM75.3707 90.3099L76.771 82.3684L78.457 82.6657L78.3692 84.1774C78.6194 83.8641 78.9076 83.6116 79.2338 83.42C79.5619 83.2179 79.9271 83.0819 80.3293 83.0121C80.7421 82.944 81.1796 82.9508 81.6418 83.0323L81.2889 85.0334L80.6271 84.9167C80.312 84.8611 80.0052 84.8504 79.7067 84.8844C79.4102 84.9079 79.1411 84.9905 78.8995 85.132C78.6703 85.2649 78.471 85.4734 78.3018 85.7577C78.1343 86.0315 78.0108 86.3942 77.9312 86.8459L77.2616 90.6433L75.3707 90.3099ZM85.1495 92.2291C84.3617 92.0902 83.698 91.7999 83.1585 91.3582C82.6209 90.9059 82.2386 90.3403 82.0118 89.6612C81.7849 88.9822 81.7428 88.2382 81.8854 87.4294C82.0336 86.589 82.3261 85.8824 82.7628 85.3096C83.2101 84.7385 83.7646 84.3273 84.4264 84.0757C85.0986 83.8259 85.8339 83.7715 86.6323 83.9122C87.4096 84.0493 88.0566 84.3421 88.5732 84.7906C89.0899 85.2392 89.4539 85.7853 89.6653 86.4292C89.8786 87.0625 89.9213 87.7415 89.7935 88.4664C89.775 88.5714 89.7546 88.687 89.7324 88.813C89.7101 88.9391 89.6765 89.0685 89.6314 89.2014L83.171 88.0623L83.385 86.849L87.9702 87.6575C88.0511 87.076 87.9364 86.5901 87.6262 86.1996C87.3178 85.7986 86.8905 85.55 86.3442 85.4536C85.9556 85.3851 85.5827 85.4114 85.2255 85.5326C84.8684 85.6537 84.5638 85.8762 84.3117 86.2C84.0615 86.5134 83.8892 86.9379 83.7947 87.4736L83.7142 87.9306C83.6271 88.4243 83.6414 88.8655 83.757 89.2541C83.8831 89.6446 84.087 89.9622 84.3688 90.2068C84.663 90.4428 85.0097 90.596 85.4088 90.6664C85.85 90.7442 86.2291 90.7136 86.5461 90.5745C86.8735 90.4373 87.1333 90.2231 87.3255 89.9321L89.2478 90.271C89.0137 90.7388 88.6934 91.1427 88.2868 91.4826C87.8822 91.812 87.4126 92.0487 86.8781 92.1927C86.3455 92.3263 85.7693 92.3384 85.1495 92.2291ZM93.403 93.6844C92.7517 93.5696 92.2301 93.3639 91.8383 93.0674C91.4466 92.7708 91.178 92.4202 91.0328 92.0155C90.8875 91.6108 90.8528 91.1931 90.9288 90.7624C91.0177 90.2582 91.2206 89.8445 91.5376 89.5212C91.865 89.1999 92.2984 88.9839 92.8378 88.8732C93.3791 88.752 94.0174 88.7562 94.7527 88.8859L96.7539 89.2388C96.8279 88.8186 96.8313 88.4617 96.7639 88.1682C96.6984 87.8642 96.5568 87.6227 96.3393 87.4435C96.1218 87.2643 95.8239 87.1414 95.4458 87.0747C95.0151 86.9988 94.6298 87.0338 94.29 87.1796C93.952 87.315 93.7111 87.5758 93.5671 87.962L91.7078 87.6341C91.8709 87.078 92.1452 86.6281 92.5307 86.2845C92.9181 85.9304 93.3886 85.6884 93.9422 85.5586C94.5082 85.4201 95.101 85.4055 95.7208 85.5148C96.4666 85.6463 97.079 85.8897 97.5579 86.2449C98.0387 86.5896 98.3731 87.0277 98.561 87.559C98.7613 88.0818 98.8021 88.6793 98.6836 89.3516L97.8167 94.2677L96.2095 93.9843L96.2455 92.6747C96.1034 92.8662 95.9326 93.0365 95.733 93.1854C95.544 93.3362 95.3323 93.4614 95.0982 93.5609C94.8658 93.6499 94.6066 93.7071 94.3206 93.7325C94.045 93.7597 93.7391 93.7437 93.403 93.6844ZM94.0923 92.2625C94.397 92.3162 94.6741 92.311 94.9237 92.2467C95.1857 92.1737 95.4183 92.0523 95.6216 91.8823C95.8372 91.7037 96.0145 91.4967 96.1535 91.2612C96.2925 91.0258 96.4028 90.769 96.4843 90.491L96.4899 90.4595L94.7409 90.1511C94.3732 90.0862 94.0602 90.0798 93.8019 90.1317C93.5437 90.1837 93.3472 90.2844 93.2125 90.434C93.0797 90.573 92.9938 90.7528 92.9549 90.9734C92.916 91.194 92.9352 91.3924 93.0125 91.5685C93.0897 91.7446 93.2207 91.8922 93.4055 92.0114C93.5903 92.1307 93.8192 92.2144 94.0923 92.2625ZM103.333 95.4354C102.598 95.3057 101.973 95.0114 101.458 94.5524C100.943 94.0933 100.579 93.52 100.364 92.8323C100.16 92.1464 100.129 91.4043 100.269 90.606C100.41 89.8076 100.698 89.1273 101.133 88.5649C101.57 87.9921 102.108 87.578 102.749 87.3227C103.402 87.0588 104.096 86.9916 104.832 87.1213C105.431 87.2269 105.93 87.4341 106.331 87.743C106.743 88.0433 107.045 88.4214 107.235 88.8774L108.03 84.3709L109.921 84.7043L107.92 96.0493L106.219 95.7492L106.232 94.5656C106.024 94.7671 105.78 94.9516 105.501 95.119C105.224 95.276 104.907 95.3879 104.548 95.4547C104.19 95.5215 103.785 95.515 103.333 95.4354ZM104.016 93.8661C104.468 93.9458 104.886 93.9111 105.269 93.7622C105.655 93.6027 105.975 93.3505 106.231 93.0057C106.487 92.6609 106.658 92.2416 106.745 91.7479C106.832 91.2542 106.815 90.8016 106.692 90.3901C106.57 89.9786 106.354 89.6372 106.044 89.366C105.735 89.0948 105.354 88.9193 104.902 88.8397C104.472 88.7637 104.065 88.8003 103.681 88.9492C103.297 89.0982 102.972 89.3442 102.706 89.6871C102.45 90.032 102.279 90.4512 102.192 90.9449C102.105 91.4387 102.122 91.8913 102.245 92.3028C102.378 92.7161 102.598 93.0637 102.906 93.3454C103.215 93.6166 103.585 93.7902 104.016 93.8661Z"
            fill="#17281C"
          />
        </g>
      </motion.g>

      {/* Second bubble - Rent */}
      <motion.g variants={bounceVariants} animate="animate">
        <g filter="url(#filter1_d_936_3035)">
          <rect
            x="170.72"
            y="98.9189"
            width="113"
            height="39"
            rx="19.5"
            transform="rotate(-4 170.72 98.9189)"
            fill="#B2B2B2"
          />
          <path
            d="M203.477 121.689L205.083 110.029L206.887 109.903L205.28 121.563L203.477 121.689ZM198.64 122.028L200.231 110.368L202.035 110.242L200.444 121.902L198.64 122.028ZM196.781 119.287L196.661 117.579L208.025 116.784L208.145 118.492L196.781 119.287ZM197.292 115.129L197.172 113.421L208.553 112.625L208.672 114.333L197.292 115.129ZM210.896 121.171L210.333 113.126L212.041 113.007L212.321 114.495C212.488 114.13 212.707 113.816 212.977 113.551C213.247 113.275 213.568 113.055 213.941 112.89C214.325 112.724 214.752 112.625 215.22 112.592L215.361 114.619L214.691 114.666C214.372 114.688 214.072 114.752 213.79 114.857C213.508 114.952 213.267 115.097 213.067 115.293C212.877 115.477 212.734 115.728 212.638 116.045C212.542 116.351 212.51 116.733 212.542 117.19L212.811 121.037L210.896 121.171ZM220.848 120.667C220.05 120.723 219.336 120.602 218.706 120.304C218.075 119.995 217.567 119.539 217.182 118.935C216.798 118.331 216.577 117.619 216.52 116.8C216.46 115.948 216.573 115.192 216.858 114.531C217.154 113.868 217.593 113.335 218.174 112.931C218.766 112.526 219.466 112.295 220.275 112.239C221.062 112.184 221.761 112.311 222.371 112.621C222.98 112.932 223.466 113.374 223.827 113.947C224.187 114.51 224.393 115.159 224.444 115.893C224.451 115.999 224.46 116.116 224.468 116.244C224.477 116.372 224.476 116.505 224.464 116.645L217.92 117.103L217.834 115.874L222.479 115.549C222.417 114.965 222.188 114.521 221.793 114.218C221.396 113.903 220.922 113.765 220.368 113.804C219.975 113.832 219.619 113.947 219.302 114.151C218.985 114.355 218.743 114.645 218.577 115.02C218.41 115.384 218.345 115.838 218.383 116.381L218.416 116.844C218.451 117.344 218.571 117.768 218.777 118.117C218.994 118.466 219.269 118.725 219.601 118.894C219.944 119.052 220.317 119.116 220.722 119.088C221.169 119.057 221.529 118.936 221.803 118.724C222.088 118.512 222.288 118.241 222.404 117.912L224.351 117.776C224.237 118.286 224.024 118.756 223.712 119.184C223.399 119.601 223 119.945 222.517 120.214C222.032 120.472 221.476 120.623 220.848 120.667ZM226.759 123.59L225.951 112.034L227.659 111.915L227.948 113.065C228.102 112.819 228.289 112.587 228.509 112.369C228.739 112.139 229.019 111.948 229.351 111.796C229.693 111.644 230.088 111.553 230.535 111.521C231.29 111.468 231.968 111.608 232.569 111.94C233.18 112.272 233.673 112.745 234.047 113.361C234.421 113.965 234.636 114.672 234.693 115.481C234.749 116.29 234.63 117.025 234.334 117.687C234.048 118.338 233.625 118.865 233.065 119.268C232.516 119.67 231.869 119.897 231.124 119.949C230.517 119.991 229.977 119.917 229.504 119.725C229.041 119.522 228.656 119.218 228.35 118.811L228.675 123.456L226.759 123.59ZM230.609 118.317C231.056 118.285 231.447 118.151 231.784 117.914C232.12 117.676 232.37 117.359 232.535 116.963C232.71 116.566 232.781 116.117 232.746 115.617C232.71 115.106 232.578 114.666 232.349 114.297C232.13 113.928 231.838 113.649 231.472 113.461C231.106 113.272 230.7 113.194 230.253 113.225C229.795 113.257 229.398 113.392 229.062 113.629C228.736 113.866 228.486 114.183 228.31 114.58C228.146 114.976 228.081 115.425 228.116 115.925C228.152 116.435 228.279 116.876 228.497 117.245C228.725 117.604 229.017 117.883 229.373 118.082C229.739 118.27 230.151 118.349 230.609 118.317ZM240.612 119.285C239.814 119.341 239.1 119.22 238.47 118.922C237.839 118.613 237.331 118.157 236.947 117.553C236.562 116.949 236.341 116.237 236.284 115.418C236.225 114.566 236.337 113.81 236.623 113.149C236.919 112.486 237.357 111.953 237.938 111.549C238.53 111.144 239.23 110.913 240.039 110.857C240.827 110.802 241.525 110.929 242.135 111.239C242.745 111.55 243.23 111.991 243.591 112.565C243.951 113.128 244.157 113.777 244.208 114.511C244.216 114.617 244.224 114.734 244.233 114.862C244.242 114.99 244.24 115.123 244.229 115.263L237.685 115.721L237.599 114.492L242.243 114.167C242.181 113.583 241.952 113.139 241.557 112.836C241.161 112.521 240.686 112.383 240.133 112.422C239.739 112.449 239.383 112.565 239.066 112.769C238.749 112.973 238.507 113.263 238.341 113.638C238.174 114.002 238.109 114.456 238.147 114.999L238.18 115.462C238.215 115.962 238.335 116.386 238.542 116.735C238.758 117.084 239.033 117.343 239.366 117.512C239.708 117.67 240.082 117.734 240.486 117.706C240.933 117.675 241.293 117.553 241.567 117.342C241.852 117.129 242.052 116.859 242.168 116.53L244.115 116.394C244.001 116.904 243.788 117.374 243.476 117.802C243.163 118.219 242.765 118.563 242.281 118.832C241.796 119.09 241.24 119.241 240.612 119.285ZM248.973 118.701C248.313 118.747 247.757 118.673 247.305 118.48C246.853 118.287 246.508 118.012 246.269 117.655C246.03 117.297 245.896 116.9 245.865 116.464C245.829 115.953 245.926 115.503 246.156 115.112C246.396 114.721 246.764 114.407 247.26 114.169C247.756 113.92 248.377 113.77 249.122 113.718L251.149 113.576C251.119 113.151 251.036 112.804 250.899 112.535C250.762 112.256 250.566 112.056 250.312 111.935C250.058 111.813 249.739 111.766 249.356 111.793C248.92 111.824 248.554 111.951 248.26 112.174C247.965 112.388 247.794 112.699 247.748 113.108L245.864 113.24C245.888 112.661 246.045 112.158 246.336 111.732C246.626 111.294 247.024 110.946 247.53 110.686C248.046 110.414 248.618 110.257 249.245 110.213C250.001 110.16 250.654 110.248 251.205 110.477C251.754 110.695 252.185 111.039 252.496 111.509C252.816 111.968 253.001 112.538 253.048 113.219L253.397 118.199L251.769 118.313L251.487 117.033C251.395 117.253 251.27 117.46 251.113 117.653C250.966 117.845 250.791 118.017 250.588 118.171C250.384 118.313 250.146 118.431 249.875 118.525C249.614 118.618 249.313 118.677 248.973 118.701ZM249.298 117.154C249.606 117.133 249.874 117.06 250.101 116.938C250.337 116.803 250.533 116.629 250.69 116.415C250.856 116.19 250.978 115.946 251.055 115.684C251.133 115.422 251.178 115.146 251.19 114.857L251.188 114.825L249.416 114.948C249.044 114.975 248.738 115.044 248.5 115.157C248.262 115.27 248.096 115.415 248.002 115.593C247.906 115.76 247.867 115.955 247.882 116.178C247.898 116.402 247.964 116.59 248.082 116.742C248.2 116.894 248.362 117.006 248.571 117.077C248.779 117.148 249.021 117.173 249.298 117.154ZM258.814 117.82C258.271 117.858 257.792 117.806 257.375 117.664C256.97 117.521 256.642 117.261 256.391 116.883C256.14 116.505 255.991 115.98 255.944 115.31L255.683 111.575L254.31 111.671L254.197 110.059L255.57 109.963L255.645 107.825L257.337 107.706L257.485 109.829L259.672 109.676L259.785 111.288L257.598 111.441L257.859 115.176C257.887 115.58 257.992 115.856 258.174 116.004C258.365 116.14 258.668 116.194 259.083 116.165L260.073 116.096L260.186 117.724L258.814 117.82Z"
            fill="#17281C"
          />
        </g>
      </motion.g>

      {/* Third bubble - Repeat */}
      <motion.g variants={bounceVariants} animate="animate">
        <g filter="url(#filter2_d_936_3035)">
          <rect
            x="150.041"
            y="12"
            width="98"
            height="39"
            rx="19.5"
            transform="rotate(3 150.041 12)"
            fill="#FFDDA1"
          />
          <path
            d="M183.679 38.7972L186.694 27.4194L188.5 27.5141L185.484 38.8918L183.679 38.7972ZM178.837 38.5435L181.837 27.1649L183.643 27.2595L180.643 38.6381L178.837 38.5435ZM177.326 35.5963L177.415 33.8867L188.792 34.4829L188.702 36.1925L177.326 35.5963ZM178.34 31.5318L178.429 29.8222L189.822 30.4192L189.732 32.1289L178.34 31.5318ZM191.106 39.1864L191.528 31.1335L193.237 31.2231L193.334 32.7342C193.545 32.3928 193.8 32.1071 194.1 31.8772C194.401 31.6366 194.747 31.4571 195.138 31.3387C195.539 31.2209 195.974 31.1743 196.443 31.1988L196.337 33.228L195.666 33.1929C195.346 33.1761 195.04 33.2028 194.748 33.273C194.457 33.3325 194.2 33.4472 193.977 33.6171C193.766 33.7769 193.594 34.0082 193.46 34.311C193.327 34.6031 193.249 34.9782 193.225 35.4362L193.023 39.2869L191.106 39.1864ZM201.046 39.8996C200.247 39.8578 199.553 39.6505 198.963 39.2778C198.375 38.8945 197.926 38.3796 197.618 37.7333C197.31 37.087 197.178 36.3537 197.221 35.5335C197.265 34.6813 197.47 33.9443 197.833 33.3225C198.208 32.7012 198.708 32.2254 199.334 31.8951C199.971 31.5653 200.694 31.4216 201.504 31.464C202.292 31.5054 202.97 31.7171 203.537 32.0993C204.105 32.4816 204.533 32.9793 204.821 33.5926C205.11 34.1952 205.235 34.864 205.196 35.599C205.191 35.7055 205.185 35.8227 205.178 35.9505C205.171 36.0783 205.154 36.2109 205.125 36.3483L198.574 36.0049L198.638 34.7746L203.288 35.0183C203.297 34.4313 203.124 33.963 202.769 33.6132C202.414 33.2528 201.96 33.0581 201.406 33.0291C201.012 33.0084 200.645 33.08 200.305 33.2437C199.965 33.4075 199.69 33.6655 199.479 34.0176C199.269 34.3591 199.15 34.8014 199.121 35.3447L199.097 35.808C199.071 36.3087 199.139 36.7448 199.301 37.1165C199.474 37.4887 199.715 37.7791 200.024 37.9876C200.345 38.1859 200.708 38.2957 201.112 38.317C201.56 38.3404 201.932 38.2638 202.23 38.0871C202.538 37.911 202.77 37.6668 202.925 37.3545L204.875 37.4567C204.699 37.9495 204.431 38.3894 204.068 38.7763C203.707 39.1526 203.27 39.4447 202.757 39.6529C202.244 39.8503 201.674 39.9326 201.046 39.8996ZM206.741 40.0058L207.163 31.9529L208.856 32.0416L208.93 33.3913C209.199 32.9355 209.57 32.5811 210.043 32.3281C210.515 32.0752 211.066 31.9652 211.694 31.9981C212.344 32.0322 212.891 32.1997 213.334 32.5006C213.778 32.7909 214.109 33.2035 214.327 33.7383C214.555 34.2736 214.649 34.9301 214.608 35.7077L214.362 40.4053L212.445 40.3048L212.682 35.783C212.717 35.1119 212.595 34.5875 212.316 34.2097C212.036 33.8319 211.604 33.6276 211.018 33.5969C210.634 33.5768 210.283 33.6492 209.965 33.8141C209.657 33.9796 209.404 34.2333 209.204 34.5753C209.016 34.9073 208.909 35.3182 208.883 35.8082L208.658 40.1063L206.741 40.0058ZM219.883 40.6946C219.34 40.6661 218.87 40.5561 218.474 40.3644C218.089 40.1733 217.795 39.8748 217.592 39.469C217.389 39.0632 217.305 38.5247 217.34 37.8536L217.536 34.1147L216.162 34.0427L216.246 32.4289L217.62 32.501L217.956 30.3876L219.649 30.4764L219.538 32.6014L221.727 32.7162L221.642 34.3299L219.453 34.2152L219.257 37.9541C219.236 38.3589 219.307 38.6456 219.469 38.8143C219.642 38.9729 219.936 39.0631 220.352 39.0849L221.342 39.1368L221.257 40.7666L219.883 40.6946Z"
            fill="#552F16"
          />
        </g>
      </motion.g>

      <defs>
        <filter
          id="filter0_d_936_3035"
          x="-3"
          y="46"
          width="178.299"
          height="131.251"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="12"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_936_3035"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="25" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0625882 0 0 0 0 0.0926346 0 0 0 0 0.15702 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_936_3035"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_936_3035"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_936_3035"
          x="132.72"
          y="78.0364"
          width="191.445"
          height="122.788"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="12"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_936_3035"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="25" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0625882 0 0 0 0 0.0926346 0 0 0 0 0.15702 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_936_3035"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_936_3035"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_936_3035"
          x="110"
          y="-1"
          width="175.907"
          height="120.075"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="12"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_936_3035"
          />
          <feOffset dy="25" />
          <feGaussianBlur stdDeviation="25" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0625882 0 0 0 0 0.0926346 0 0 0 0 0.15702 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_936_3035"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_936_3035"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default WaitlistSectionRing;
