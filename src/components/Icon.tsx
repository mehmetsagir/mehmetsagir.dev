type Props = {
  name: string;
  size?: string;
};

const Icon: React.FC<Props> = ({ name, size = '100%' }) => {
  switch (name) {
    case 'burger':
      return (
        <svg height={size} width={size} viewBox="0 0 95 95" fill="currentColor">
          <path d="M1 26.75A2.75 2.75 0 013.75 24h87.5a2.75 2.75 0 110 5.5H3.75A2.75 2.75 0 011 26.75zm0 41A2.75 2.75 0 013.75 65h87.5a2.75 2.75 0 110 5.5H3.75A2.75 2.75 0 011 67.75z"></path>
        </svg>
      );
    case 'home':
      return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
          <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
        </svg>
      );
    case 'photo':
      return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
          <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
          <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
        </svg>
      );
    case 'at':
      return (
        <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
        </svg>
      );
    case 'bookmarks':
      return (
        <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
        </svg>
      );
    case 'blog':
      return (
        <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
      );
    case 'github':
      return (
        <svg
          width={size}
          height={size}
          fill="currentColor"
          viewBox="0 0 55.11 55.11"
        >
          <path d="M18.549 29.909c-2.757 0-5 2.691-5 6s2.243 6 5 6 5-2.691 5-6-2.243-6-5-6zm0 10c-1.654 0-3-1.794-3-4s1.346-4 3-4 3 1.794 3 4-1.345 4-3 4zM37.549 29.909c-2.757 0-5 2.691-5 6s2.243 6 5 6 5-2.691 5-6-2.243-6-5-6zm0 10c-1.654 0-3-1.794-3-4s1.346-4 3-4 3 1.794 3 4-1.345 4-3 4z"></path>
          <path d="M39.075 24.909l-.149.001c-.926.016-1.853.054-2.78.091-.844.034-1.688.068-2.531.085l-1.465.031c-2.543.053-5.178.107-7.751.097a106.068 106.068 0 01-3.522-.093c-1.598-.06-3.248-.124-4.886-.083-2.273.055-4.185.781-5.685 2.159-2.491 2.289-3.521 5.325-3.148 9.282.542 5.743 2.86 8.68 8.002 10.135 4.323 1.223 8.665 1.333 12.322 1.281l1.218.006c.411.003.822.007 1.233.007.507 0 1.014-.005 1.521-.021 3.595-.115 6.746-.652 9.632-1.644 3.169-1.088 5.279-3.166 6.269-6.175.756-2.3.978-4.479.679-6.662-.487-3.55-3.584-8.497-8.959-8.497zm6.381 14.535c-.795 2.417-2.437 4.022-5.019 4.908-2.695.925-5.654 1.428-9.046 1.536-.891.028-1.782.02-2.673.014l-1.249-.007c-3.525.05-7.688-.052-11.763-1.206-4.317-1.221-6.094-3.498-6.556-8.397-.31-3.292.511-5.785 2.509-7.622 1.133-1.04 2.606-1.589 4.38-1.633 1.576-.036 3.196.023 4.762.082 1.196.045 2.393.09 3.589.095 2.608.012 5.247-.044 7.802-.098l1.463-.03c.857-.018 1.714-.053 2.571-.087.911-.037 1.822-.074 2.733-.089l.108-.001c4.13 0 6.607 4.022 6.984 6.771.259 1.874.063 3.76-.595 5.764z"></path>
          <path d="M51.866 18.56c-.595-.819-.867-1.301-.782-2.176.177-1.843-.075-3.698-.319-5.491l-.016-.118a26.113 26.113 0 00-1.867-6.819l-.325-.754-1.477.314c-2.051.431-4.173.877-6.107 1.994-1.284.742-2.562 1.533-3.797 2.297-.827.512-1.654 1.024-2.486 1.523a.465.465 0 01-.16.049c-4.473-.781-9.118-.789-13.81-.023-.058.01-.247-.022-.397-.111-.516-.309-1.019-.641-1.521-.972a38.583 38.583 0 00-1.767-1.12c-2.862-1.68-6.024-3.301-9.753-3.777l-.73-.094-.389.843a5.217 5.217 0 00-.186.425 32 32 0 00-1.924 9.085c-.073 1.101-.148 2.24.014 3.377.054.377.009.453-.138.637-1.347 1.679-2.31 3.435-2.945 5.368-1.067 3.246-1.26 6.845-.609 11.324.54 3.747 1.459 6.481 2.977 8.863 3.193 5.008 8.122 7.829 14.651 8.385 3.263.278 6.574.32 9.82.32.698 0 1.393-.002 2.084-.004.911-.003 1.823-.005 2.732-.003 4.18.002 7.514-.542 10.545-1.729 5.396-2.111 8.984-6.043 10.663-11.688.936-3.145 1.355-6.489 1.245-9.941-.122-3.846-1.208-7.205-3.226-9.984zm.065 19.355c-1.516 5.093-4.615 8.494-9.475 10.396-2.79 1.093-5.87 1.61-9.812 1.591-.913-.002-1.827 0-2.741.003-3.861.011-7.853.022-11.729-.309-5.958-.507-10.255-2.95-13.135-7.467-1.359-2.131-2.187-4.621-2.685-8.075-.614-4.22-.45-7.431.53-10.413.559-1.701 1.411-3.252 2.605-4.742.523-.652.684-1.281.557-2.17-.133-.931-.064-1.964.008-3.061a29.793 29.793 0 011.714-8.197c3.065.542 5.773 1.949 8.253 3.405.57.334 1.124.7 1.677 1.064.527.348 1.055.695 1.597 1.019.54.322 1.192.46 1.747.368 4.468-.729 8.89-.723 13.146.021.49.083 1.075-.033 1.528-.304a216.1 216.1 0 002.51-1.538 141.69 141.69 0 013.746-2.266c1.619-.935 3.446-1.332 5.381-1.74a24.428 24.428 0 011.413 5.541l.016.118c.228 1.681.464 3.419.309 5.03-.154 1.594.459 2.586 1.155 3.544 1.803 2.483 2.734 5.386 2.846 8.872.105 3.24-.286 6.372-1.161 9.31z"></path>
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          width={size}
          height={size}
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M69.12 4.267c-18.773 0-35.84 6.827-48.64 19.627C6.827 37.547 0 54.613 0 72.533c0 18.773 7.68 35.84 20.48 48.64 12.8 12.8 30.72 20.48 47.787 19.627h1.707c17.067 0 33.28-6.827 46.08-19.627 12.8-12.8 20.48-29.867 20.48-48.64.853-17.92-6.827-34.987-19.627-47.787C104.107 11.093 87.04 4.267 69.12 4.267zm34.987 104.96c-9.387 9.387-22.187 15.36-35.84 14.507-12.8 0-26.453-5.12-35.84-14.507-10.24-9.387-15.36-23.04-15.36-36.693s5.12-26.453 15.36-36.693c9.387-9.387 22.187-14.507 36.693-14.507 12.8 0 25.6 5.12 34.987 14.507 10.24 10.24 15.36 23.04 15.36 36.693s-5.12 27.306-15.36 36.693zM102.4 157.867H33.28c-13.653 0-24.747 11.093-24.747 25.6v298.667c0 13.653 11.947 25.6 25.6 25.6H102.4c13.653 0 25.6-11.947 25.6-24.747v-299.52c0-13.654-11.947-25.6-25.6-25.6zm8.533 325.12c0 4.267-4.267 7.68-8.533 7.68H34.133c-4.267 0-8.533-4.267-8.533-8.533V183.467c0-4.267 3.413-8.533 7.68-8.533h69.12c4.267 0 8.533 4.267 8.533 8.533v299.52zM392.533 149.333h-17.92c-33.28 0-64.853 14.507-85.333 37.547v-11.947c0-8.533-8.533-17.067-17.067-17.067H186.88c-7.68 0-17.067 6.827-17.067 16.213v318.293c0 9.387 9.387 15.36 17.067 15.36h93.867c7.68 0 17.067-5.973 17.067-15.36v-184.32c0-28.16 20.48-50.347 46.933-50.347 13.653 0 26.453 5.12 35.84 14.507 8.533 7.68 11.947 19.627 11.947 34.987v183.467c0 8.533 8.533 17.067 17.067 17.067h85.333c8.533 0 17.067-8.533 17.067-17.067v-220.16C512 202.24 459.947 149.333 392.533 149.333zm102.4 340.48l-.853.853h-83.627L409.6 307.2c0-20.48-5.12-35.84-16.213-46.933-12.8-12.8-29.867-19.627-47.787-19.627-35.84.853-64 29.867-64 67.413v182.613h-93.867V174.933h84.48l.853.853v53.76l23.04-23.04.853-.853c17.067-23.893 46.933-39.253 78.507-39.253h17.92c57.173 0 101.547 46.08 101.547 104.107v219.306z"></path>
        </svg>
      );
    case 'twitter':
      return (
        <svg
          width={size}
          height={size}
          fill="currentColor"
          viewBox="0 0 52.851 52.851"
        >
          <path d="M52.412 9.656a1.002 1.002 0 00-1.165.031c-.449.34-1.179.61-1.965.818 2.047-2.294 2.091-3.826 2.069-4.178a1 1 0 00-1.586-.746c-2.303 1.674-4.597 2.027-5.961 2.063a11.067 11.067 0 00-7.707-3.102c-6.196 0-11.236 5.108-11.236 11.386 0 .54.038 1.079.113 1.613C14.236 17.42 5.516 7.131 5.426 7.024a1 1 0 00-1.634.142c-3.09 5.36-1.022 10.068.868 12.764a6.617 6.617 0 01-.767-.473 1 1 0 00-1.598.786c-.083 5.108 2.375 8.034 4.687 9.652a1 1 0 00-1.056 1.287c1.597 5.227 5.518 7.003 8.013 7.606-5.13 3.994-12.68 2.708-12.763 2.694a1 1 0 00-.783 1.779c5.415 4.133 11.892 5.048 16.57 5.048 3.539 0 6.05-.524 6.29-.577 23.698-5.616 24.365-27.323 24.31-30.88 4.449-4.137 5.144-5.713 5.251-6.103a.997.997 0 00-.402-1.093zm-6.538 6.035a1 1 0 00-.32.803c.063.96 1.275 23.597-22.742 29.288-.109.023-9.656 2.015-17.932-2.085 3.497-.097 8.511-1.013 12.004-4.935a.998.998 0 00-.746-1.665h-.01c-.05.032-5.301-.006-7.705-5.001.968.055 2.162-.005 3.113-.443a1 1 0 00-.213-1.887c-.269-.057-6.115-1.364-6.933-7.741.887.388 2.022.705 3.144.534a.999.999 0 00.506-1.745c-.25-.218-5.74-5.097-3.137-11.39 2.826 2.965 11.196 10.67 21.337 10.088a1.004 1.004 0 00.913-1.242 9.628 9.628 0 01-.29-2.341c0-5.176 4.144-9.386 9.237-9.386 2.491 0 4.828.994 6.579 2.8.184.19.437.299.701.304 1.06.015 2.802-.11 4.77-.899-.568.707-1.402 1.554-2.629 2.518a1 1 0 00.698 1.783 22.6 22.6 0 002.764-.414 56.969 56.969 0 01-3.109 3.056z"></path>
        </svg>
      );
    case 'superpeer':
      return (
        <svg width={size} height={size} fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.42.188c.408.235.53.686.568.992.04.318.01.641-.03.86-.008.101-.035.202-.058.279-.031.101-.073.216-.12.336-.096.24-.226.529-.366.825-.28.595-.616 1.246-.84 1.666L7.74 4.7c.219-.41.547-1.048.82-1.625.136-.289.255-.556.34-.77a3.47 3.47 0 00.095-.262c.016-.054.02-.077.02-.077a.5.5 0 01.01-.08 2 2 0 00.025-.59c-.03-.234-.097-.286-.103-.29L8.935 1 8.922.992c-.047-.03-.424-.195-.882.355L4.68 5.749a.65.65 0 00-.07.183c-.014.067-.005.098-.002.106a.041.041 0 00.011.014.237.237 0 00.07.042c.09.039.26.079.56.07h5.371l.024.003c.288.03.72.128 1.116.337.392.207.823.567.94 1.149l.006.032.002.033c.008.139.024.436-.1.788-.076.22-.202.447-.397.667.087.07.176.147.262.233.27.269.551.658.602 1.158.044.426-.174.798-.415 1.07a3.11 3.11 0 01-.428.395c.046.046.091.095.135.147.21.248.429.608.43 1.047a.505.505 0 01-.01.102c-.072.353-.293.626-.505.844a4.762 4.762 0 01-.123.12l4.07.975c.025.006.05.014.077.025.184.077.42.235.596.486.185.264.294.625.199 1.054a.503.503 0 01-.025.08c0-.002-.078.313-.297.551-.238.26-.609.442-1.17.534a.499.499 0 01-.082.006c-1.718-.005-5.868-.171-8.686-.81h-.003l-.003-.001c-.909-.22-2.279-.687-3.45-1.385-1.129-.673-2.231-1.656-2.331-2.967-.189-.892.039-2.845 1.982-4.627l.639.697C1.938 10.5 1.863 12.142 1.983 12.66c.007.03.01.057.012.083.05.821.773 1.593 1.874 2.249 1.068.636 2.34 1.073 3.185 1.277 2.692.609 6.714.778 8.438.785.41-.071.546-.185.59-.233.04-.043.045-.06.062-.113.008-.026.02-.061.04-.113a.352.352 0 00-.057-.278.493.493 0 00-.161-.144l-4.837-1.158a.502.502 0 01-.228-.853c.133-.126.247-.229.349-.32.133-.12.246-.222.355-.334.15-.153.216-.255.243-.33-.014-.113-.079-.245-.203-.392a2.283 2.283 0 00-.436-.383.503.503 0 01.035-.85c.3-.173.547-.363.707-.545.17-.191.188-.307.184-.348-.02-.194-.137-.392-.33-.584a2.811 2.811 0 00-.563-.42.503.503 0 01-.039-.846c.326-.231.456-.454.513-.616a.975.975 0 00.05-.383c-.046-.176-.192-.336-.448-.471a2.273 2.273 0 00-.748-.23H5.267c-.732.018-1.306-.181-1.528-.7-.196-.456-.004-.928.143-1.17l.013-.022L7.3.758l.005-.007C8.067-.172 8.97-.09 9.42.188z"
          ></path>
        </svg>
      );
    case 'youtube': {
      return (
        <svg viewBox="0 0 512 512" fill="currentColor">
          <path
            d="M435.574,59.858H76.426C34.285,59.858,0,94.143,0,136.284v171.023c0,4.427,3.589,8.017,8.017,8.017
			c4.427,0,8.017-3.589,8.017-8.017V136.284c0-33.3,27.092-60.393,60.393-60.393h359.148c33.3,0,60.393,27.092,60.393,60.393
			v239.432c0,33.3-27.092,60.393-60.393,60.393H76.426c-33.3,0-60.393-27.092-60.393-60.393v-34.205
			c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017v34.205c0,42.141,34.285,76.426,76.426,76.426h359.148
			c42.141,0,76.426-34.285,76.426-76.426V136.284C512,94.143,477.715,59.858,435.574,59.858z"
          />
          <path
            d="M362.982,249.278l-34.205-22.233c-3.712-2.412-8.677-1.359-11.091,2.353c-2.412,3.712-1.36,8.677,2.353,11.091
			l23.864,15.511l-148.296,96.394V159.607l98.779,64.206c3.711,2.411,8.678,1.359,11.09-2.353c2.414-3.712,1.36-8.677-2.353-11.091
			l-111.165-72.256c-5.24-3.407-12.384,0.491-12.384,6.721v222.33c0,6.226,7.142,10.131,12.385,6.721l171.023-111.165
			C367.761,259.615,367.76,252.385,362.982,249.278z"
          />
        </svg>
      );
    }
  }
  return null;
};

export default Icon;
