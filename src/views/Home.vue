<template>
  <div>
    <beautiful-chat id="chat-bot"
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :icons="icons"
      :open="openChat"
      :showEmoji="false"
      :showFile="false"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CloseIcon from 'vue-beautiful-chat/src/assets/close-icon.png'
import OpenIcon from 'vue-beautiful-chat/src/assets/logo-no-bg.svg'
import FileIcon from 'vue-beautiful-chat/src/assets/file.svg'
import CloseIconSvg from 'vue-beautiful-chat/src/assets/close.svg'

export default {
  name: 'home',
  data() {
    return {
      expectedMessages: [
        {
          input: "Family",
          next: [
            { msg: "Okay. Family it is." },
            { msg: "I still have some more learning to go." }
          ]
        },{
          input: "Finance",
          next: [
            { msg: "Okay. Finance it is." },
            { msg: "I still have some more learning to go." }
          ]
        },{
          input: "Crime",
          next: [
            { msg: "Okay. Crime it is." },
            { msg: "I still have some more learning to go." }
          ]
        },{
          input: "Something else",
          next: [
            { msg: "Okay. I cannot help with that yet." },
            { msg: "I still have some more learning to go." }
          ]
        }
      ],
      icons:{
        open:{
          img: OpenIcon,
          name: 'default',
        },
        close:{
          img: CloseIcon,
          name: 'default',
        },
        file:{
          img: FileIcon,
          name: 'default',
        },
        closeSvg:{
          img: CloseIconSvg,
          name: 'default',
        },
      },
      participants: [
        {
          id: 'bot',
          name: 'Lawra',
          imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [
          { type: 'text', author: `bot`, data: { text: `*Hello!* There are many legal centres in WA. I have been created by the people at *Coders for Causes* to help you find the right person or organisation to talk with.` } },
          { type: 'text', author: `bot`, data: { text: `I may struggle to understand what you type. Please use the /suggested answers/ that I have been taught how to answer instead.` } },
          {
            author: 'bot',
            type: 'text',
            id: 1, // or text '1'
            data: { text: 'What is your legal problem related to?' },
            suggestions: ['Family', 'Finance', 'Crime', 'Something else']
          }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 1,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: true, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    }
  },
  methods: {
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ]
      let arr = JSON.parse(JSON.stringify(this.expectedMessages))
      let msg = JSON.parse(JSON.stringify(message))
      msg = msg.data.text
      let send

      arr.forEach((element) => {
        if(element.input === msg) {
          this.botSendMessage(element.next)
        }
      })
    },
    botSendMessage( messages ) {
      messages.forEach( (output) => {
        this.messageList = [ ...this.messageList, { 
          type: 'text',
          author: `bot`,
          data: { text: output.msg }
        }]
      })
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    },
    handleScrollToTop () {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
  	},
    handleOnType () {
      console.log('Emit typing event')
    },
    editMessage(message){
      const m = this.messageList.find(m=>m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    }
  }
}
</script>

<style scoped lang="stylus">
  #chat-bot
    pointer-events: all
</style>