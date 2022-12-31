import daisyui from 'daisyui'
import { Config } from 'tailwindcss'

export default <Partial<Config>>{
    plugins: [daisyui, require('@tailwindcss/typography')()],
    darkMode: 'class',
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/colors/themes')["[data-theme=light]"],
                    primary: "#5199a8",
                    "--rounded-btn": "0.25rem"
                }
            }]
    }
}