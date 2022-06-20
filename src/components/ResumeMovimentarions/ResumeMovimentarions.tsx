import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

// import PieChart from 'react-native-svg-charts'
import { Svg, Path } from 'react-native-svg'

export const ResumeMovimentarions = () => {

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7);
    const data = [12, 4, 98, 12]
    const pieData = data.map((value, index) => ({
        value,
        key: `${index}-${value}`,
        svg: {
            fill: randomColor()
        },
    }))

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Resumo de movimentações</Text>
            <View style={styles.resumeContent}>
                <View>
                    <Text style={styles.labelGreen}>Média de receitas</Text>
                    <Text style={styles.labelRed}>Média de despesas</Text>
                </View>

                <View style={styles.graphicContainer}>
                    <Image
                        width={20}
                        source={require('../../assets/graphic.png')}
                    />
                </View>

                {/* <PieChart data={pieData} /> */}

            </View>
        </View>
    )
}
