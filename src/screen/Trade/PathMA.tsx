import { colors } from "@theme/colors"
import { G, Path } from "react-native-svg"

interface Props {
    dPathMA: {
        ma7: string;
        ma25: string;
        ma99: string;
    },
    dPathGreen: string;
    dPathRed: string;
}
// Show nến và các đường ma7, ma25, ma99
export default ({ dPathMA, dPathGreen, dPathRed }: Props) => {
    return (
        <G key={'G_Path'}>
            {/* Tạo nến xanh */}
            <Path
                key={'G_Path_Candle_Green'}
                d={dPathGreen}
                stroke={colors.green2}
                fill={colors.green2}
            />
            {/* Tạo nến đỏ */}
            <Path
                key={'G_Path_Candle_Red'}
                d={dPathRed}
                stroke={colors.red3}
                fill={colors.red3}
            />
            {/* Tạo đường ma7 */}
            <Path
                key={'P_MA7'}
                d={dPathMA.ma7}
                strokeWidth={1}
                stroke={colors.yellow}
                fill={'none'}
            />
            {/* Tạo đường ma25 */}
            <Path
                key={'P_MA25'}
                d={dPathMA.ma25}
                strokeWidth={1}
                stroke={colors.ma25}
                fill={'none'}
            />
            {/* Tạo đường ma99 */}
            <Path
                key={'P_MA99'}
                d={dPathMA.ma99}
                strokeWidth={1}
                stroke={colors.ma99}
                fill={'none'}
            />
        </G>
    )
}