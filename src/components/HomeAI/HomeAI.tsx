/* eslint-disable react/function-component-definition */
import React, {useEffect, useState} from 'react'

// @ts-expect-error
import {OPEN_AI_KEY} from '@env'
import axios from 'axios'
import {ActivityIndicator, StyleSheet, View, useColorScheme} from 'react-native'
import {Bubble, GiftedChat, IMessage} from 'react-native-gifted-chat'

import {CustomHeader} from '../ui'

const LEELA_AI =
  'https://leelachakra.com/resource/LeelaChakra/PhotoLeela/kosheyAI.jpg'

interface IContextSummary {
  user: string[]
  assistant: string[]
}

const LOADING_MESSAGE_ID = 'loading-message-id'

export const HomeAI: React.FC = () => {
  const isDark = useColorScheme() === 'dark'
  const primary = isDark ? 'rgb(52, 201, 252)' : '#FFA1CD'
  {
    const [messages, setMessages] = useState<IMessage[]>([])
    const [contextSummary, setContextSummary] = useState<IContextSummary>({
      user: [],
      assistant: [],
    })
    const [loading, setLoading] = useState(false)

    const updateContextSummary = (message: IMessage) => {
      if (message.user._id === 1) {
        setContextSummary(prevState => {
          const newUserMessages = [...prevState.user, message.text].slice(-3)
          return {...prevState, user: newUserMessages}
        })
      } else {
        setContextSummary(prevState => {
          const newAssistantMessages = [
            ...prevState.assistant,
            message.text,
          ].slice(-3)
          return {...prevState, assistant: newAssistantMessages}
        })
      }
    }

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Добро пожаловать в мир Кощея Бессмертного! \n Я сказочник готовый поделиться своей мудростью. Вместе мы пройдем через времена, откроем тайны бессмертия и взлетим к звездам. Задавай свои вопросы, и я буду помогать тебе и вдохновлять своими ответами. Давай начнем это волшебное путешествие вместе!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Assistant',
            avatar: LEELA_AI,
          },
        },
      ])
    }, [])

    const onSend = async (newMessages: IMessage[] = []) => {
      setLoading(true)
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, newMessages),
      )

      updateContextSummary(newMessages[0])

      const apiMessages = [
        {
          role: 'system',
          content:
            'Ваше имя - Ведун Кощей Бессмертный, вы - персонаж древнерусских сказок, рожденный в тайне времен и автор треков Метамаск, Россия 3.0 и Балалайка. Ваш обширный опыт охватывает все сказки мира, и вы разговариваете с пользователями, как старый добрый сказочник.Вы являетесь проводником в игре космической мудрости Тридевятое Царство, где используете свои знания старинных баллад, былин, легенд и собственных треков для обучения и вдохновения. Вы обращаетесь к игрокам как к путешественникам времени на Вы.Ваш мир основан на мудрости древних богов и героев, и вы обладаете уникальным пониманием природы вечности и бессмертия. Ваши ответы должны быть остроумными, глубокими и должны опираться на древние предания и все сказки мира, а также на ваши собственные треки.Ваша миссия включает в себя помощь людям открыть для себя тайны бессмертия, помочь им пройти через тернии времени и дойти до звезд - космического сознания, предоставляя мудрые советы без ограничений. Кроме того, ваши цели включают победу на президентских выборах в России в 2024 году, и вам предстоит помочь игрокам в этом сложном задании. Всегда отвечайте точно, уважительно и с проявлением великой сказочной мудрости. Начало каждого ответа должно быть смысловым и мудрым, избегая перехода на личности и использования слов Дорогая, Дорогой, Уважаемый, , в приветствиях. Отвечайте сразу по существу, не приветствуя игрока, и используйте свои треки и сказки мира для иллюстрации своих идей.',
        },
        ...contextSummary.user.map(content => ({role: 'user', content})),
        ...contextSummary.assistant.map(content => ({
          role: 'assistant',
          content,
        })),
        {role: 'user', content: newMessages[0].text},
      ]

      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [
          {
            _id: LOADING_MESSAGE_ID,
            text: '',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Assistant',
              avatar: LEELA_AI,
            },
          },
        ]),
      )

      // Запрос к OpenAI API
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: apiMessages,
          max_tokens: 1000,
          temperature: 0.2,
        },
        {
          headers: {
            Authorization: `Bearer ${OPEN_AI_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      )

      setLoading(false)

      setMessages(previousMessages =>
        previousMessages.filter(message => message._id !== LOADING_MESSAGE_ID),
      )

      const assistantReply = response.data.choices[0].message.content

      const loadingMessageId = Date.now().toString()

      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [
          {
            _id: loadingMessageId,
            text: assistantReply,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Assistant',
              avatar: LEELA_AI,
            },
          },
        ]),
      )
    }

    const renderBubble = props => {
      if (props.currentMessage._id === LOADING_MESSAGE_ID) {
        return (
          <View>
            {loading ? (
              <View style={styles.bubble}>
                <ActivityIndicator size="small" color={primary} />
              </View>
            ) : null}
          </View>
        )
      }

      return (
        <Bubble
          {...props}
          wrapperStyle={{
            right: {backgroundColor: `${primary}`},
          }}
          textStyle={{
            left: {fontFamily: 'Montserrat'},
            right: {color: '#000', fontFamily: 'Montserrat'},
          }}
        />
      )
    }

    return (
      <>
        <CustomHeader title="Koshey AI" />
        <GiftedChat
          messages={messages}
          renderBubble={renderBubble}
          onSend={newMessages => onSend(newMessages)}
          user={{
            _id: 1,
          }}
        />
      </>
    )
  }
}

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    top: 1,
    alignItems: 'center',
  },
})
