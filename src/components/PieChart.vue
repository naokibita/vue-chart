<script>
import { Pie } from 'vue-chartjs';

export default {
  extends: Pie,
  data() {
    return {
      // グラフ用データ
      pieChartData: {
        // ラベル
        labels: [],
        // データ詳細
        datasets: [{
          data: [],
          // グラフの色指定
          backgroundColor: [
            'rgba(255, 100, 130, 0.2)',
            'rgba(100, 130, 255, 0.2)',
            'rgba(100, 250, 255, 0.2)',
          ],
          // グラフのボーダー指定
          borderWidth: 0,
        }],
      },
      options: {
        // グラフタイトルの指定 defaultで表示
        title: {
          display: true,
          text: '藩と人口',
        },
        tooltips: {
          mode: 'index',
        },
        // ツールチップ表示時、イベント設定
        events: ['mouseout', 'mousemove'],
        // 中心をくり抜く、バウムクーヘンにする
        cutoutPercentage: 50,
        // 凡例の詳細指定
        legend: {
          // 凡例の表示・非表示
          display: true,
          // 凡例の位置
          position: 'bottom',
          // 凡例のクリックイベントをきかなくする
          onClick: false,
          // 凡例のスタイル指定
          labels: {
            fontColor: 'rgb(0, 0, 0)',
          },
        },
        // グラフ表示時のアニメーション指定
        animation: {
          animateRotate: false, // default: true, falseでグラフ表示時、アニメーションをする
          animateScale: true, // default: false, trueでグラフ表示時に中心から広がるアニメーション
        },
      },
    };
  },
  created() {
    // データを渡す
    this.pieChartData.datasets[0].data = [20, 1000, 1000];
    this.pieChartData.labels = ['長州', '薩摩', '江戸幕府'];
  },
  watch: {
    data() {
      this.renderChart(this.pieChartData, this.options);
    },
    options() {
      this.renderChart(this.pieChartData, this.options);
    },
  },
  mounted() {
    this.renderChart(this.pieChartData, this.options);
  },
};
</script>
