<template>
  <section class="container">
    <ul>
      <li><router-link to="/chartjs">vue-chartjs</router-link></li>
    </ul>
    <h1>Demo examples of vue-chartjs</h1>
    <div class="columns">
      <div class="column">
        <h2>Pie Chart</h2>
        <div class="pieChartWrap">
          <pie-chart></pie-chart>
        </div>
      </div>
      <div class="column">
        <h3>Line Chart</h3>
        <line-chart></line-chart>
      </div>
      <div class="column">
        <h3>Bar Chart</h3>
        <bar-chart></bar-chart>
      </div>
    </div>
  </section>
</template>

<script>
import LineChart from '@/components/LineChart';
import BarChart from '@/components/BarChart';
import PieChart from '@/components/PieChart';

export default {
  components: {
    LineChart,
    BarChart,
    PieChart,
  },
};
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .pieChartWrap {
    margin-top: 10px;
  }
</style>
