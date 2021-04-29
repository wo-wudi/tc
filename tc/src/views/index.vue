<template>
  <div class="index">
    <my-header></my-header>
    <img class="w-100" src="/img/1.png" alt="">
    <div class="m-4"><span class="h4 font-weight-bold">微信支付优惠券<p class="h6 font-weight-light text-muted mt-3">微信支付自动抵扣</p></span></div>
    <div class="row no-gutters">
      <div v-for="(item,index) in hl" :key="index.hid" class="father col-lg-4 col-sm-12" @click="hlshow(item)">
        <div class="ml-3">
          <div class="yh">
            <div class="yh1"></div>
            <div class="yh2"></div>
            <div class="image">
              <img class="w-50" src="/img/2.png" alt="">
            </div>
            <div class="title">超优汇率券</div>
            <div class="detail">7天内笔笔有效</div>
            <div class="last">
              <div>
                <div>生效中</div>
              </div>
            </div>
          </div>
          <div class="ch">
            <div class="ch1"></div>
            <div class="ch2"></div>
            <div class="ctitle">{{item.hprice}}={{item.hmoney}}</div>
            <div class="ctitle1">市场参考价</div>
            <div class="ctitle2">{{item.hrmb}}</div>
          </div>
        </div>
      </div>
      <div class="father dad col-lg-4 col-sm-12" @click="jyshow" v-for="(item,index) in jy" :key="index">
        <div class="ml-3">
          <div class="yh">
            <div class="yh1"></div>
            <div class="yh2"></div>
            <div class="money">{{item.jprice}}</div>
            <span class="full">满300元可用</span>
            <div class="yuan">元</div>
            <div class="title">境外通用券</div>
            <div class="detail">15天内有效</div>
            <div class="last">
              <div>
                <div>已领取</div>
              </div>
            </div>
          </div>
          <div class="ch">
            <div class="ch1"></div>
            <div class="ch2"></div>
            <div class="ctitle" v-if="jynum!=0">还有{{jynum}}张可以领</div>
            <div class="ctitle" v-else>没有可以领</div>
            <div class="ctitle1">使用后扫不同码可解锁下一张</div>
          </div>
        </div>
      </div>
      <div class="father ba col-lg-4 col-sm-12" v-for="(item,index) in zx" :key="index.zid" @click="zxshow(item)">
        <div class="ml-3">
          <div class="yh">
            <div class="yh1"></div>
            <div class="yh2"></div>
            <span class="full">满300元可用</span>
            <div class="cash">{{item.zprice}}</div>
            <div class="title">{{item.zname}}专享券</div>
            <div class="detail">{{item.zdl}}</div>
            <div class="last" v-if="item.zchoice">
              <div>
                <div>已领取</div>
              </div>
            </div>
            <div class="last" v-else>
              <div>
                <div>未领取</div>
              </div>
            </div>
          </div>
          <div class="ch">
            <div class="ch1"></div>
            <div class="ch2"></div>
            <div class="ctitle1">香港地区{{item.zname}}线下门店可用</div>
          </div>
        </div>
      </div>
    </div>
    <div class="m-4"><span class="h4 font-weight-bold">商户优惠券<p class="h6 font-weight-light text-muted mt-3">请向收银员出示使用优惠券</p></span></div>
    <div class="row no-gutters">
      <div class="col-lg-3 col-md-4 col-sm-6 foot" v-for="(item,index) in ty" :key="index.tid">
        <div class="ml-4 mt-3">
          <div class="fyh">
            <div class="yh1"></div>
            <div class="yh2"></div>
            <span class="ffull">{{item.tenglish}}
              <div>{{item.tname}}</div>
            </span>
            <div v-if="item.tprice" class="fcash">{{item.tprice}} <span>{{item.tmoney}}</span></div>
            <div v-else class="fcash"><img class="w-25" src="/img/3.png" alt=""></div>
            <div class="fdetail">{{item.tuse}}</div>
          </div>
          <div class="ch">
            <div class="ch1"></div>
            <div class="ch2"></div>
            <button>使用优惠</button>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 foot" v-for="(item,index) in sp" :key="index.sid">
        <div class="ml-4 mt-3">
          <div class="fyh">
            <div class="yh1"></div>
            <div class="yh2"></div>
            <span class="ffull">The Runabouts 
              <div>{{item.sname}}</div>
            </span>
            <div class="fcash">{{item.sprice}} <span>港币</span></div>
            <div class="fdetail">原价 <span>{{item.soldprice}}港币</span></div>
          </div>
          <div class="ch">
            <div class="ch1"></div>
            <div class="ch2"></div>
            <button>使用优惠</button>
          </div>
        </div>
      </div>
    </div>
    <h1 class="question my-5">常见问题</h1>
    <div class="p-5">
      <div class="mb-1">领券中心优惠券的种类有哪些？</div>
      <div class="mb-3 text-muted">领券中心频道汇集了微信支付优惠券和商品优惠券（以实际展示的优惠券为准）</div>
      <div class="mb-1">领券中心优惠券领取有门槛吗？</div>
      <div class="mb-3 text-muted">领券中心所展示优惠券均为免费领取，领取后可按照所领取优惠券有效期和详细规则直接使用；贴心提示：不要超过优惠券有效使用期限哦。</div>
      <div class="mb-1">商户优惠券如何使用？</div>
      <div class="mb-3 text-muted">选择您想要购买的商品，勾选可用优惠券，支付购买即可。</div>
      <div class="mb-1">还有任何问题</div>
      <div class="mb-3 text-muted">请致电：1888888888</div>
    </div>
    <!--遮罩层-->
    <div class="mask" v-show="show">
    </div>
    <!--显示的内容-->
    <div class="login-page" v-show="show==1">
      <span>恭喜你获得：</span>
      <div id="move" class="position-relative move">
        <img src="/img/5.png" alt="">
        <div class="main">
          <div>{{h.hprice}}=<span>{{h.hmoney}}</span></div>
          <div>市场参考价<span>{{h.hrmb}}</span></div>
        </div>
        <button @click="close">领取</button>
      </div>
    </div>
    <div class="login-page" v-show="show==2">
      <span>恭喜你获得：</span>
      <div class="position-relative">
        <img src="/img/4.png" alt="">
        <div class="num">
          <countTo :startVal='startVal' autoplay :endVal='endVal' :duration='3000'></countTo>
        </div>
        <button @click="closejy">领取</button>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
  components: { countTo },
  data(){
    return{
      startVal: 0,
      endVal: 1,
      jy: [{jprice:0}],
      jynum: 5,
      show: 1,
      hl: [],
      zx: [],
      ty: [],
      sp: [],
      najy:[],
      token:'',
      h: {
        hprice:'100港币',
        hmoney:'85.41人民币',
        hrmb:'85.80人民币'
      }
    }
  },
  mounted(){
    // let mo=document.getElementById("move")
    if(window.name == ""){
      // console.log("首次被加载");
 	   // 在首次进入页面时我们给window.name设置一个固定值(isRefresh) 
      window.name = "isRefresh"; 
    }
    else if(window.name == "isRefresh"){
      // console.log("页面被刷新");
      this.show=0
      // mo.classList.remove('move')
    }
    this.gethl()
    this.getzx()
    this.getty()
    this.getsp()
    this.getjy()
  },
  methods:{
    close () {
      this.show = 0
      // let move=document.getElementById("move")
      // console.log(move)
    },
    closejy () {
      this.show = 0
      if(this.jynum==5){
        this.jy[0]={jprice:this.endVal}
      }
      else{
        this.jy.push({jprice:this.endVal})
      }
      this.jynum--
      let obj={
        token:this.token,
        tprice:this.endVal
      }
      this.axios.post("/user/u1/addjy",this.qs.stringify(obj)).then(res=>{
        console.log(res.data)
      })
    },
    hlshow(hl){
      if(this.$store.state.user){
        this.h=hl
        this.show=1
      }
      else{
        this.$confirm('此操作将需要登录, 是否登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() =>{
          window.localStorage.removeItem('token')
          this.$router.push('/ulog')
        }).catch(()=>{})
      }
    },
    jyshow(){
      if(this.$store.state.user){
        if(this.jynum!=0){
          this.show=2,
          this.endVal=Math.ceil(Math.random()*9)  
        }
        else{
          this.$confirm('没有可以领', '提示', {
            confirmButtonText: '确定'
          }).then(() => {
          }).catch(()=>{
          })
        }
      }
      else{
        this.$confirm('此操作将需要登录, 是否登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() =>{
          window.localStorage.removeItem('token')
          this.$router.push('/ulog')
        }).catch(()=>{})
      }
    },
    zxshow(zx){
      if(this.$store.state.user){
        this.$confirm('是否领取这张专享券?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() =>{
          zx.zchoice=1
        }).catch(()=>{})
      }
      else{
        this.$confirm('此操作将需要登录, 是否登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() =>{
          window.localStorage.removeItem('token')
          this.$router.push('/ulog')
        }).catch(()=>{})
      }
    },
    getjy(){
      this.token=this.$store.state.token
      this.axios.get("/user/u1/getjy",{
        params:{
          token:this.token
        }
      }).then(res => {
        if(res.data!=0){
          this.jynum=0
          this.jy=res.data
        }
      })
    },
    gethl(){
      this.axios.get("/index/gethl").then(res => {
        this.hl=res.data.res
      }).catch(e=>{
        this.$throw(e)
      })
    },
    getzx(){
      this.axios.get("/index/getzx").then(res => {
        this.zx=res.data.res
      }).catch(e=>{
        this.$throw(e)
      })
    },
    getty(){
      this.axios.get("/index/getty").then(res => {
        this.ty=res.data.res
      }).catch(e=>{
        this.$throw(e)
      })
    },
    getsp(){
      this.axios.get("/index/getsp").then(res => {
        this.sp=res.data.res
      }).catch(e=>{
        this.$throw(e)
      })
    }
  }
}
</script>

<style scoped>
@import '../assets/css/index.css';
.index{
  background: #F7F7F7;
}
</style>