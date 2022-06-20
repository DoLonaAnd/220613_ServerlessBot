import { ApplicationCommandInteraction, InteractionResponse } from "../../@types/index.d.ts"
import { InteractionCallbackType } from "../../@types/types.ts"

export function omikuji(interaction:ApplicationCommandInteraction):InteractionResponse {
  // コマンドの情報を取得
  const data = interaction.data
  // コマンドの送信者の情報を取得
  const member = interaction.member
  
  let array = ["大凶","凶","末吉","吉","小吉","中吉","大吉"];

  // 5以下の自然数を取得。
  let num = Math.floor((Math.random() * (array.length)));



  // レスポンス本体
  const res: InteractionResponse = {
      // Type 4 reponds with the below message retaining the user's
      // input at the top.
      type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `あなたの今日の運勢は${array[num]}です。`,
      }
    }
  return res;
}