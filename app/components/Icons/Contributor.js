import React from 'react'
import Svg, { Path } from 'react-native-svg'
const Contributor = ({oColor = "#21be93" , dColor = "#212121", style = {height: 24, width: 24}, ...props} = {})=> (
    <Svg version={1} viewBox="0 0 1138 1138" width={style.width} height={style.height} style={style} {...props}>
        <Path
            fill={oColor}
            d="M450 1047h60a1 1 0 0 0 0-957h-60zm120-807a.9 1 0 0 1 0 660z"
        />
        <Path
            fill={dColor}
            d="M436.5 216.4c-87.2 18.3-162.6 66.3-216.3 137.8-38.2 50.9-61.1 109.7-69.4 177.8-1.7 13.7-1.7 59.2 0 73.5 9.9 85.6 44.9 159 103.8 217.9 52.5 52.5 116.8 86.1 191.4 100 24.6 4.6 31 5.1 63.5 5 33 0 42.3-.8 68.5-6 136.4-27 244.8-129.1 279.6-263.4 8-30.9 10.9-54.8 10.9-90 0-28.6-.7-37.7-5-62.5-21.9-127.8-114.1-235.7-237.2-277.9-14.2-4.8-31-9.5-43.8-12.1-4.4-.9-9-1.8-10.2-2.1l-2.3-.4v122.7l10.3 3.3c75.2 23.7 133 81 157 155.5 32.5 101.1-5 211-92.6 271.3-40.1 27.6-85.6 41.5-135.7 41.5-50.1 0-95.6-13.9-135.7-41.5-44.2-30.4-76.2-73.4-92.6-124.4-30.5-94.7.6-198.2 78.3-260.6 24.4-19.6 54.4-35.1 83.1-43.1l7.9-2.2v-61.3c0-48.3-.3-61.2-1.2-61.1-.7 0-6.2 1.1-12.3 2.3z"
        />
    </Svg>
)

export default Contributor
