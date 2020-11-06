<template>
    <div class="demo-card-square mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">{{par.name}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
        {{par.type}}
        <div v-for="sub in par.sub_accounts" :key="sub.id">
            <p>{{sub.name}}</p>
            <div v-for="subb in sub.sub_accounts" :key="subb.id">
                {{subb.name}}
                <ul>
                    <li v-for="subbb in subb.sub_accounts" :key="subbb.id">{{subbb.name}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        View Updates
        </a>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Partida',
  props: {
    par: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-card-square.mdl-card {
    width: 320px;
    height: auto;
    }
    .demo-card-square > .mdl-card__title {
    color: #fff;
    background:
        url('') bottom right 15% no-repeat #46B6AC;
    }
</style>
