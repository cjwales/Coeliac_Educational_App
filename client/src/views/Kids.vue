<template lang="html">
  <div class="">
    <h1>We want to help you understand more about whats going on.</h1>
    <p>Click on the questions below to show the anwers</p>
    <div class="cards">
      <div v-for="(card, index) in qa" class="card"
        :style="{ backgroundColor: card.color, boxShadow: `5px 10px ${card.shadow}` }">
        <button :style="{ backgroundColor: card.color }"
          @click="showAnswer(index)">
          Q.{{ index+1 }} {{ card.question }}
        </button>
        <div class="card-body" v-if="visibleAnswer === index">
          {{ card.answer }}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data: () => ({
    qa: [
      {question: 'What is Coeliacs?' , answer: 'Coeliacs (pronounced ‘see-liac’) disease is a illness where your body starts to fight against its self. There is a protein called gluten which is found in food that causes harm to the inside of your tummy. ', color: '#4FBFE8', shadow: '#3AADD9'},

      {question: 'How many people have Coeliacs?' , answer: 'Its about 1 in every 100 children have Coeliacs but not everyone knows they have, they might not find out till they are older. ', color: '#EFC7A4', shadow: '#E3B692'},

      {question: 'Where can gluten be found?' , answer: 'Gluten is found in foods that contain wheat, barley and rye.', color: '#FA6C50', shadow: '#E8553E'},

      {question: 'What are might your symptoms be?' , answer: 'unexplained sickness, Sore tummys, tiredness, Sometimes you might loose weight (not in every case), mouth ulcers, skin rash or itchy skin, tooth enamel problems', color: '#9ED269', shadow: '#89C053'},

      {question: 'Will I have Coeliacs all my life?' , answer: 'Yes you will, but after you’ve made changes to your diet and been living gluten free for a while it will become lots easier to live with and you’ll get lots of help making sure your are able to stay healthy.', color: '#EB5463', shadow: '#D94452'},

      {question: 'What must I do differently?' , answer: 'You will need to change your diet and stop eating foods that contain gluten. You will also need to make sure gluten doesn’t sneak into your food, sometimes even a small crumb can make you sick.', color: '#5E9CEA', shadow: '#4A88DA'},

      {question: 'Is diet all that important?' , answer: 'Diet is very important, it is the only way to make your body better, there is no magic pill you can take.', color: '#AC92EA', shadow: '#9579DA'},

      {question: 'What doctors will I see?' , answer: 'If the person who looks after you thinks some food might be making you sick, they will take you to see a GP (the person who you might see if you’ve a really sore throat or ear) If they think its gluten that might be making you feel sick, you will go to see either a gastroenterologist (tummy doctor) or you might even go see a special person who knows all about the foods we eat, what’s good for us and what’s not, they are called a dietician.', color: '#FDCD56', shadow: '#F5B945'},
    ],
    visibleAnswer: null
  }),
  methods: {
    showAnswer(index) {
      this.visibleAnswer = index
    }
  }
}
</script>

<style lang="css" scoped>
.cards {
  display: flex;
  flex-flow: wrap;
  margin: 100px;
}

.card {
  width: 250px;
  margin: 30px;
  padding: 40px;
}

.card-body {
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  font-weight: 300;
}

button {
  font-family: 'Lakki Reddy', cursive;
  font-size: 24px;
  border: none;
  line-height: 26px;
}

p {
  margin: 40px;
text-align: center;
}

h1 {
  margin-left: 100px;
  margin-right: 100px;
  padding-left: 50px;
  box-shadow: 15px 10px 20px #cbd0d8;
}
</style>
