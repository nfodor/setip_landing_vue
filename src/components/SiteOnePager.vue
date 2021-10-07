<template>
  <div class="site-one-pager">
    <div class="rectangle"></div>
    <div class="overlap-group3">
      <group4 />
      <div class="service roboto-normal-cloud-burst-15px">{{ service }}</div>
      <div class="use-cases roboto-normal-cloud-burst-16px">{{ useCases }}</div>
      <div class="developers roboto-normal-cloud-burst-16px">{{ developers }}</div>
      <div class="pricing roboto-normal-cloud-burst-15px">{{ pricing }}</div>
      <div class="resources roboto-normal-cloud-burst-16px">{{ resources }}</div>
      <div class="company roboto-normal-cloud-burst-16px">{{ company }}</div>
      <group4 :className="group4Props.className" />
    </div>
    <div class="overlap-group4">
      <div class="for-business-users helvetica-regular-normal-cello-13px">{{ forBusinessUsers }}</div>
    </div>
    <div class="overlap-group6">
      <div class="for-developers helvetica-regular-normal-cello-13px">{{ forDevelopers }}</div>
    </div>
    <div class="overlap-group8">
      <img class="rectangle-1" :src="rectangle" />
      <div class="text-1 roboto-normal-apricot-48px" v-html="text1"></div>
    </div>
    <div class="overlap-group1">
      <div class="flex-col">
        <img class="x1633439311511-1" :src="x16334393115111" />
        <div class="overlap-group24">
          <div class="resilient roboto-normal-cello-14px">{{ resilient }}</div>
        </div>
        <div class="text-15 roboto-normal-cello-45px">{{ text15 }}</div>
      </div>
      <div class="flex-col-1">
        <div class="overlap-group21">
          <div class="simple roboto-normal-aztec-14px">{{ simple }}</div>
        </div>
        <div class="dns-and-ssl-simple roboto-normal-cloud-burst-45px">{{ dnsAndSslSimple }}</div>
        <h1 class="title roboto-normal-cloud-burst-54px">{{ title }}</h1>
        <div class="overlap-group23">
          <div class="control roboto-normal-aztec-14px">{{ control }}</div>
        </div>
        <div class="overlap-group22">
          <div class="text-16 roboto-normal-cello-48px">{{ text16 }}</div>
          <div class="move-faster roboto-normal-apricot-46px">{{ moveFaster }}</div>
        </div>
        <div class="text-17 roboto-normal-apricot-14px">{{ text17 }}</div>
        <div class="text-18 roboto-normal-apricot-24px">{{ text18 }}</div>
      </div>
    </div>
    <div class="overlap-group19 border-3px-cello">
      <div class="view-case-study roboto-normal-cello-24px">{{ viewCaseStudy }}</div>
    </div>
    <div class="overlap-group15 border-1px-apricot">
      <div class="webhooks roboto-normal-apricot-32px">{{ webhooks }}</div>
      <div class="text-21 roboto-normal-apricot-18px" v-html="text21"></div>
      <div class="learn-more roboto-normal-apricot-24px">{{ learnMore }}</div>
    </div>
    <div class="overlap-group2 border-1px-apricot">
      <div class="text-22 roboto-normal-apricot-31px">{{ text22 }}</div>
      <div class="text-23 roboto-normal-apricot-18px">{{ text23 }}</div>
      <div class="learn-more-1 roboto-normal-apricot-24px">{{ learnMore2 }}</div>
    </div>
    <div class="overlap-group12 border-1px-apricot">
      <div class="secure-apps roboto-normal-apricot-31px" v-html="secureApps"></div>
      <div class="text-24 roboto-normal-apricot-18px">{{ text24 }}</div>
      <div class="learn-more-2 roboto-normal-apricot-24px">{{ learnMore3 }}</div>
    </div>
    <div class="overlap-group10 border-1px-apricot">
      <div class="routing roboto-normal-apricot-31px">{{ routing }}</div>
      <div class="text-25 roboto-normal-apricot-18px">{{ text25 }}</div>
      <div class="learn-more-3 roboto-normal-apricot-24px">{{ learnMore4 }}</div>
    </div>
    <div class="overlap-group18 border-2px-turquoise-pearl">
      <div class="text-27 ptmono-normal-ecru-white-10px">{{ text27 }}</div>
    </div>
    <div class="overlap-group5 border-2px-turquoise-pearl ptmono-normal-ecru-white-13px">
      <div class="distributed-dns">{{ distributedDns }}</div>
      <div class="text-28">{{ text28 }}</div>
    </div>
    <div class="overlap-group14 border-2px-turquoise-pearl">
      <div class="monitoring ptmono-normal-ecru-white-12px">{{ monitoring }}</div>
    </div>
    <div class="overlap-group17 border-2px-turquoise-pearl">
      <p class="text-29 ptmono-normal-apricot-11px">{{ text29 }}</p>
    </div>
    <div class="overlap-group16 border-2px-turquoise-pearl">
      <div class="text-30 ptmono-normal-apricot-13px">{{ text30 }}</div>
    </div>
    <div class="overlap-group7">
      <div class="text-31 roboto-normal-cello-14px">{{ text31 }}</div>
    </div>
    <div class="rectangle-2 border-1px-foggy-gray-2"></div>
    <div class="rectangle-3 border-1px-apricot"></div>
    <div class="overlap-group13">
      <div class="hosted-on-setipio roboto-normal-aztec-14px">{{ hostedOnSetipIo }}</div>
    </div>
    <div class="overlap-group9"><img class="frame" src="/img/frame@2x.svg" /></div>
    <div class="overlap-group11">
      <div class="text-2 roboto-normal-apricot-48px">{{ text2 }}</div>
      <div class="text-9 roboto-normal-apricot-18px">{{ text9 }}</div>
    </div>
    <div class="text-3 roboto-normal-apricot-48px">{{ text3 }}</div>
    <div class="text-4 roboto-normal-apricot-36px" v-html="text4"></div>
    <group1 />
    <div class="text-8 roboto-normal-apricot-18px">{{ text8 }}</div>
    <div class="get-started-free roboto-normal-selective-yellow-24px">{{ getStartedFree }}</div>
    <div class="overlap-group20">
      <div class="text-10 roboto-normal-apricot-32px">{{ text10 }}</div>
      <div class="alo-yoga roboto-normal-aztec-14px">{{ aloYoga }}</div>
    </div>
    <div class="text-11 roboto-normal-apricot-32px">{{ text11 }}</div>
    <div class="simple-api roboto-normal-apricot-24px-2">{{ simpleApi }}</div>
    <p class="text-12 ptmono-normal-aztec-8px">{{ text12 }}</p>
    <div class="distributed-dns-1 roboto-normal-cornflower-23px">{{ distributedDns2 }}</div>
    <p class="text-13 ptmono-normal-aztec-8px">{{ text13 }}</p>
    <div class="text-14 roboto-normal-apricot-32px">{{ text14 }}</div>
    <div class="text-19 roboto-bold-apricot-34px">
      <span class="roboto-bold-apricot-34px">{{ spanText }}</span
      ><span class="roboto-normal-apricot-32px">{{ spanText2 }}</span>
    </div>
    <div class="p-atric-king-cto roboto-normal-apricot-14px">{{ patricKingCto }}</div>
    <div class="everlane roboto-normal-violet-red-14px">{{ everlane }}</div>
    <div class="text-20 helvetica-regular-normal-apricot-54px">{{ text20 }}</div>
    <div class="text-26 roboto-normal-apricot-48px">{{ text26 }}</div>
    <div class="text-32 roboto-normal-apricot-45px">{{ text32 }}</div>
    <div class="text-33 roboto-normal-apricot-45px">{{ text33 }}</div>
    <div class="get-started-free-1 roboto-normal-apricot-24px">{{ getStartedFree2 }}</div>
    <div class="talk-to-sales roboto-normal-violet-red-23px">{{ talkToSales }}</div>
    <p class="text-34 roboto-normal-apricot-14px">{{ text34 }}</p>
    <div class="get-started roboto-normal-apricot-16px">{{ getStarted }}</div>
    <div class="log-in roboto-normal-violet-red-18px">{{ logIn }}</div>
    <div class="developers-1 roboto-normal-apricot-14px">{{ developers2 }}</div>
    <div class="text-35 roboto-normal-apricot-14px">{{ text35 }}</div>
    <div class="developer-docs roboto-normal-apricot-14px">{{ developerDocs }}</div>
    <div class="text-36 roboto-normal-apricot-14px">{{ text36 }}</div>
    <div class="integrations roboto-normal-apricot-14px">{{ integrations }}</div>
    <div class="curl roboto-normal-apricot-14px">{{ curl }}</div>
    <div class="nodejs roboto-normal-apricot-14px">{{ nodejs }}</div>
    <div class="python roboto-normal-apricot-14px">{{ python }}</div>
    <div class="nextjs roboto-normal-apricot-14px">{{ nextJs }}</div>
    <div class="gatsby roboto-normal-apricot-14px">{{ gatsby }}</div>
    <div class="place roboto-normal-apricot-14px">{{ place }}</div>
    <div class="nodejs-1 roboto-normal-apricot-14px">{{ nodejs2 }}</div>
    <div class="python-1 roboto-normal-apricot-14px">{{ python2 }}</div>
    <div class="nextjs-1 roboto-normal-apricot-14px">{{ nextJs2 }}</div>
    <div class="gatsby-1 roboto-normal-apricot-14px">{{ gatsby2 }}</div>
    <div class="resources-1 roboto-normal-apricot-14px">{{ resources2 }}</div>
    <div class="user-guides roboto-normal-apricot-14px">{{ userGuides }}</div>
    <div class="blog roboto-normal-apricot-14px">{{ blog }}</div>
    <div class="community-forum roboto-normal-apricot-13px">{{ communityForum }}</div>
    <div class="saa-s-templates roboto-normal-apricot-13px">{{ saasTemplates }}</div>
    <div class="partners roboto-normal-apricot-13px">{{ partners }}</div>
    <div class="offering roboto-normal-apricot-14px">{{ offering }}</div>
    <div class="features roboto-normal-apricot-14px">{{ features }}</div>
    <div class="pricing-1 roboto-normal-apricot-13px">{{ pricing2 }}</div>
    <div class="use-cases-1 roboto-normal-apricot-14px">{{ useCases2 }}</div>
    <div class="text-37 roboto-normal-apricot-14px">{{ text37 }}</div>
    <div class="virtual-dmz roboto-normal-apricot-14px">{{ virtualDmz }}</div>
    <p class="text-38 roboto-normal-apricot-13px">{{ text38 }}</p>
    <div class="secure-apps-1 roboto-normal-apricot-14px">{{ secureApps2 }}</div>
    <div class="routing-1 roboto-normal-apricot-14px">{{ routing2 }}</div>
    <div class="company-1 roboto-normal-apricot-14px">{{ company2 }}</div>
    <div class="about roboto-normal-apricot-14px">{{ about }}</div>
    <div class="careers roboto-normal-apricot-14px">{{ careers }}</div>
    <div class="text-39 roboto-normal-curious-blue-14px">{{ text39 }}</div>
    <div class="copyright roboto-normal-apricot-8px">{{ copyright }}</div>
    <div class="security roboto-normal-apricot-8px">{{ security }}</div>
    <div class="privacy-policy roboto-normal-apricot-8px">{{ privacyPolicy }}</div>
    <div class="terms-of-service roboto-normal-apricot-8px">{{ termsOfService }}</div>
  </div>
</template>

<script>
import Group4 from "./Group4";
import Group1 from "./Group1";
export default {
  name: "SiteOnePager",
  components: {
    Group4,
    Group1,
  },
  props: [
    "service",
    "useCases",
    "developers",
    "pricing",
    "resources",
    "company",
    "forBusinessUsers",
    "forDevelopers",
    "rectangle",
    "text1",
    "x16334393115111",
    "resilient",
    "text15",
    "simple",
    "dnsAndSslSimple",
    "title",
    "control",
    "text16",
    "moveFaster",
    "text17",
    "text18",
    "viewCaseStudy",
    "webhooks",
    "text21",
    "learnMore",
    "text22",
    "text23",
    "learnMore2",
    "secureApps",
    "text24",
    "learnMore3",
    "routing",
    "text25",
    "learnMore4",
    "text27",
    "distributedDns",
    "text28",
    "monitoring",
    "text29",
    "text30",
    "text31",
    "hostedOnSetipIo",
    "text2",
    "text9",
    "text3",
    "text4",
    "text8",
    "getStartedFree",
    "text10",
    "aloYoga",
    "text11",
    "simpleApi",
    "text12",
    "distributedDns2",
    "text13",
    "text14",
    "spanText",
    "spanText2",
    "patricKingCto",
    "everlane",
    "text20",
    "text26",
    "text32",
    "text33",
    "getStartedFree2",
    "talkToSales",
    "text34",
    "getStarted",
    "logIn",
    "developers2",
    "text35",
    "developerDocs",
    "text36",
    "integrations",
    "curl",
    "nodejs",
    "python",
    "nextJs",
    "gatsby",
    "place",
    "nodejs2",
    "python2",
    "nextJs2",
    "gatsby2",
    "resources2",
    "userGuides",
    "blog",
    "communityForum",
    "saasTemplates",
    "partners",
    "offering",
    "features",
    "pricing2",
    "useCases2",
    "text37",
    "virtualDmz",
    "text38",
    "secureApps2",
    "routing2",
    "company2",
    "about",
    "careers",
    "text39",
    "copyright",
    "security",
    "privacyPolicy",
    "termsOfService",
    "group4Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.site-one-pager
  background-color: $cello
  height: 7669px
  position: relative
  width: 1200px

.rectangle
  background-color: $foggy-gray
  height: 1px
  left: 0
  position: absolute
  top: 96px
  width: 1200px

.overlap-group3
  align-items: center
  background-color: $apricot
  box-shadow: 0px 2px 2px #0000000a
  display: flex
  height: 96px
  left: 0
  min-width: 1200px
  padding: 32px 57px
  position: absolute
  top: 0

.service
  letter-spacing: 0
  line-height: 20.8px
  margin-left: 159px
  margin-top: 3.0px
  min-height: 21px
  text-align: center
  white-space: nowrap
  width: 55px

.use-cases
  letter-spacing: 0
  line-height: 20.8px
  margin-left: 40px
  margin-top: 3.0px
  min-height: 21px
  text-align: center
  white-space: nowrap
  width: 78px

.developers
  letter-spacing: 0
  line-height: 20.8px
  margin-left: 39px
  margin-top: 3.0px
  min-height: 21px
  text-align: center
  white-space: nowrap
  width: 81px

.pricing
  letter-spacing: 0
  line-height: 20.8px
  margin-left: 34px
  margin-top: 3.0px
  min-height: 21px
  text-align: center
  white-space: nowrap
  width: 49px

.resources
  letter-spacing: 0
  line-height: 20.8px
  margin-left: 35px
  margin-top: 3.0px
  min-height: 21px
  text-align: center
  white-space: nowrap
  width: 76px

.company
  letter-spacing: 0
  line-height: 20.8px
  margin-left: 40px
  margin-top: 3.0px
  min-height: 21px
  text-align: center
  white-space: nowrap
  width: 68px

.overlap-group4
  align-items: center
  background-image: url(..//img/rectangle@2x.svg)
  background-size: 100% 100%
  display: flex
  height: 37px
  left: 20px
  min-width: 152px
  padding: 0 17px
  position: absolute
  top: 216px

.for-business-users
  letter-spacing: 0
  min-height: 15px
  text-align: center
  width: 118px

.overlap-group6
  align-items: center
  background-image: url(..//img/rectangle-1@2x.svg)
  background-size: 100% 100%
  display: flex
  height: 37px
  left: 172px
  min-width: 127px
  padding: 0 17px
  position: absolute
  top: 216px

.for-developers
  letter-spacing: 0
  min-height: 15px
  text-align: center
  width: 93px

.overlap-group8
  height: 112px
  left: 220px
  position: absolute
  top: 325px
  width: 726px

.rectangle-1
  height: 1px
  left: 674px
  position: absolute
  top: 106px
  width: 1px

.text-1
  left: 0
  letter-spacing: 1.62px
  position: absolute
  text-align: center
  top: 0

.overlap-group1
  align-items: flex-start
  background-color: $apricot-2
  display: flex
  height: 2338px
  justify-content: flex-end
  left: 0
  min-width: 1200px
  padding: 58px 32px
  position: absolute
  top: 1964px

.flex-col
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-top: 23px
  min-height: 859px
  width: 418px

.x1633439311511-1
  height: 580px
  object-fit: cover
  width: 351px

.overlap-group24
  align-items: flex-end
  background-color: $violet-red
  border-radius: 30px
  display: flex
  height: 38px
  margin-top: 116px
  min-width: 142px
  padding: 9px 15px

.resilient
  letter-spacing: 2.52px
  line-height: 18.2px
  min-height: 19px
  text-align: center
  white-space: nowrap
  width: 112px

.text-15
  letter-spacing: 1.62px
  line-height: 54px
  margin-top: 17px
  min-height: 108px
  width: 418px

.flex-col-1
  align-items: center
  align-self: flex-end
  display: flex
  flex-direction: column
  margin-left: 30px
  min-height: 2199px
  width: 685px

.overlap-group21
  align-items: flex-end
  background-color: $foggy-gray
  border-radius: 30px
  display: flex
  height: 38px
  margin-right: 221.0px
  min-width: 90px
  padding: 9px 15px

.simple
  letter-spacing: 2.52px
  line-height: 18.2px
  min-height: 19px
  text-align: center
  white-space: nowrap
  width: 60px

.dns-and-ssl-simple
  align-self: flex-end
  letter-spacing: 1.62px
  line-height: 54px
  margin-top: 20px
  min-height: 54px
  white-space: nowrap
  width: 498px

.title
  align-self: flex-end
  letter-spacing: 1.62px
  margin-right: 56px
  margin-top: 4px
  min-height: 64px
  width: 442px

.overlap-group23
  align-items: flex-end
  background-color: $sinbad
  border-radius: 30px
  display: flex
  height: 38px
  margin-right: 194.0px
  margin-top: 1278px
  min-width: 117px
  padding: 9px 15px

.control
  letter-spacing: 2.52px
  line-height: 18.2px
  min-height: 19px
  text-align: center
  white-space: nowrap
  width: 87px

.overlap-group22
  height: 162px
  margin-left: 113.0px
  margin-top: 30px
  position: relative
  width: 424px

.text-16
  left: 0
  letter-spacing: 1.62px
  line-height: 54px
  position: absolute
  top: 0
  width: 424px

.move-faster
  left: 0
  letter-spacing: 1.62px
  line-height: 54px
  position: absolute
  top: 108px
  white-space: nowrap
  width: 264px

.text-17
  align-self: flex-start
  letter-spacing: 2.52px
  line-height: 28px
  margin-left: 8px
  margin-top: 419px
  min-height: 28px
  text-align: center
  white-space: nowrap
  width: 218px

.text-18
  align-self: flex-start
  letter-spacing: 0
  line-height: 29px
  margin-top: 35px
  min-height: 29px
  text-align: center
  white-space: nowrap
  width: 233px

.overlap-group19
  align-items: flex-start
  border-radius: 40px
  display: flex
  height: 70px
  left: 458px
  min-width: 285px
  padding: 15px 36px
  position: absolute
  top: 4834px

.view-case-study
  letter-spacing: 0
  line-height: 31.2px
  min-height: 32px
  text-align: center
  white-space: nowrap
  width: 173px

.overlap-group15
  align-items: flex-start
  background-color: $cello
  border-radius: 10px
  box-shadow: -4px 4px 10px #bababa40
  display: flex
  flex-direction: column
  left: 20px
  min-height: 524px
  padding: 40px 13px
  position: absolute
  top: 5284px
  width: 259px

.webhooks
  align-self: flex-end
  letter-spacing: 0
  line-height: 41.6px
  margin-right: 11px
  margin-top: 137px
  min-height: 89px
  text-align: center
  width: 214px

.text-21
  letter-spacing: 0
  line-height: 23.4px
  margin-top: 11px
  min-height: 117px
  text-align: center
  width: 231px

.learn-more
  letter-spacing: 0
  line-height: 31.2px
  margin-left: 32px
  margin-top: 27px
  min-height: 63px
  width: 61px

.overlap-group2
  align-items: flex-start
  background-color: $cello
  border-radius: 10px
  box-shadow: -4px 4px 10px #bababa40
  display: flex
  flex-direction: column
  left: 321px
  min-height: 520px
  padding: 39px 20px
  position: absolute
  top: 5284px
  width: 259px

.text-22
  align-self: center
  letter-spacing: 0
  line-height: 41.6px
  margin-right: 2.0px
  margin-top: 120px
  min-height: 84px
  text-align: center
  width: 157px

.text-23
  letter-spacing: 0
  line-height: 23.4px
  margin-top: 29px
  min-height: 117px
  text-align: center
  width: 218px

.learn-more-1
  letter-spacing: 0
  line-height: 31.2px
  margin-left: 25px
  margin-top: 29px
  min-height: 63px
  width: 61px

.overlap-group12
  align-items: flex-start
  background-color: $cello
  border-radius: 10px
  box-shadow: -4px 4px 10px #bababa40
  display: flex
  flex-direction: column
  left: 621px
  min-height: 523px
  padding: 39px 17px
  position: absolute
  top: 5284px
  width: 259px

.secure-apps
  align-self: center
  letter-spacing: 0
  line-height: 41.6px
  margin-right: 2.0px
  margin-top: 123px
  min-height: 84px
  text-align: center
  width: 133px

.text-24
  letter-spacing: 0
  line-height: 23.4px
  margin-top: 31px
  min-height: 117px
  text-align: center
  width: 223px

.learn-more-2
  letter-spacing: 0
  line-height: 31.2px
  margin-left: 28px
  margin-top: 27px
  min-height: 63px
  width: 61px

.overlap-group10
  align-items: flex-start
  background-color: $cello
  border-radius: 10px
  box-shadow: -4px 4px 10px #bababa40
  display: flex
  flex-direction: column
  left: 922px
  min-height: 520px
  padding: 39px 12px
  position: absolute
  top: 5284px
  width: 259px

.routing
  align-self: center
  letter-spacing: 0
  line-height: 41.6px
  margin-right: 2.0px
  margin-top: 120px
  min-height: 42px
  text-align: center
  white-space: nowrap
  width: 157px

.text-25
  align-self: flex-end
  letter-spacing: 0
  line-height: 23.4px
  margin-top: 70px
  min-height: 134px
  text-align: center
  width: 229px

.learn-more-3
  letter-spacing: 0
  line-height: 31.2px
  margin-left: 33px
  margin-top: 13px
  min-height: 63px
  width: 61px

.overlap-group18
  align-items: flex-end
  background-color: $turquoise-pearl-2
  border-radius: 10px
  display: flex
  height: 260px
  left: 20px
  min-width: 216px
  padding: 56px 41px
  position: absolute
  top: 6082px

.text-27
  letter-spacing: 0.42px
  line-height: 24px
  min-height: 48px
  text-align: center
  width: 131px

.overlap-group5
  align-items: flex-start
  background-color: $turquoise-pearl-2
  border-radius: 10px
  display: flex
  flex-direction: column
  left: 256px
  min-height: 260px
  padding: 20px 27px
  position: absolute
  top: 6082px
  width: 216px

.distributed-dns
  letter-spacing: 0.42px
  line-height: 24px
  margin-top: 136px
  min-height: 24px
  text-align: center
  white-space: nowrap
  width: 158px

.text-28
  letter-spacing: 0.42px
  line-height: 24px
  margin-top: 12px
  min-height: 48px
  text-align: center
  width: 158px

.overlap-group14
  align-items: flex-end
  background-color: $turquoise-pearl-2
  border-radius: 10px
  display: flex
  height: 260px
  left: 492px
  min-width: 216px
  padding: 80px 51px
  position: absolute
  top: 6082px

.monitoring
  letter-spacing: 0.42px
  line-height: 24px
  min-height: 24px
  text-align: center
  white-space: nowrap
  width: 110px

.overlap-group17
  align-items: flex-end
  background-color: $turquoise-pearl-2
  border-radius: 10px
  display: flex
  height: 260px
  left: 728px
  min-width: 216px
  padding: 50px 34px
  position: absolute
  top: 6082px

.text-29
  letter-spacing: 0.42px
  line-height: 24px
  min-height: 72px
  text-align: center
  width: 143px

.overlap-group16
  align-items: flex-end
  background-color: $turquoise-pearl-2
  border-radius: 10px
  display: flex
  height: 260px
  left: 964px
  min-width: 216px
  padding: 56px 35px
  position: absolute
  top: 6082px

.text-30
  letter-spacing: 0.42px
  line-height: 24px
  min-height: 48px
  text-align: center
  width: 143px

.overlap-group7
  align-items: flex-end
  background-color: $apricot
  border-radius: 30px
  display: flex
  height: 30px
  left: 449px
  min-width: 301px
  padding: 0 20px
  position: absolute
  top: 6572px

.text-31
  letter-spacing: 2.52px
  line-height: 28px
  min-height: 28px
  text-align: center
  white-space: nowrap
  width: 261px

.rectangle-2
  height: 2px
  left: 50px
  position: absolute
  top: 7022px
  width: 1100px

.rectangle-3
  height: 2px
  left: 75px
  position: absolute
  top: 7537px
  width: 1050px

.overlap-group13
  align-items: center
  background-color: $apricot
  border-radius: 75px
  box-shadow: 0px 5px 5px #00000033
  display: flex
  height: 39px
  left: 20px
  min-width: 179px
  padding: 0 19px
  position: absolute
  top: 731px

.hosted-on-setipio
  letter-spacing: 0
  line-height: 18.2px
  min-height: 19px
  text-align: center
  white-space: nowrap
  width: 136px

.overlap-group9
  align-items: center
  background-color: $apricot
  box-shadow: 0px 1px 6px #0000000f
  display: flex
  height: 60px
  left: 1120px
  min-width: 60px
  padding: 0 16px
  position: absolute
  top: 720px

.frame
  height: 32px
  width: 28px

.overlap-group11
  height: 56px
  left: 225px
  position: absolute
  top: 474px
  width: 719px

.text-2
  left: 0
  letter-spacing: 1.62px
  position: absolute
  top: 0

.text-9
  left: 213px
  letter-spacing: 0
  position: absolute
  top: 33px
  width: 5px

.text-3
  left: 57px
  letter-spacing: 1.62px
  position: absolute
  top: 571px

.text-4
  left: 960px
  letter-spacing: 1.62px
  position: absolute
  top: 1662px
  width: 220px

.text-8
  left: 220px
  letter-spacing: 0
  line-height: 32px
  position: absolute
  text-align: center
  top: 121px
  white-space: nowrap
  width: 730px

.get-started-free
  left: 974px
  letter-spacing: 0
  line-height: 29px
  position: absolute
  text-align: center
  top: 224px
  white-space: nowrap
  width: 179px

.overlap-group20
  height: 177px
  left: 560px
  position: absolute
  top: 1660px
  width: 302px

.text-10
  left: 0
  letter-spacing: 0
  line-height: 41px
  position: absolute
  top: 0
  width: 302px

.alo-yoga
  left: 194px
  letter-spacing: 2.52px
  position: absolute
  text-align: center
  top: 48px
  width: 95px

.text-11
  left: 30px
  letter-spacing: 0
  line-height: 41px
  position: absolute
  top: 1683px
  width: 302px

.simple-api
  left: 772px
  letter-spacing: 0.48px
  line-height: 36px
  position: absolute
  text-align: center
  top: 715px
  white-space: nowrap
  width: 140px

.text-12
  left: 38px
  letter-spacing: 0.36px
  line-height: 24px
  position: absolute
  text-align: center
  top: 1230px
  white-space: nowrap
  width: 333px

.distributed-dns-1
  left: 69px
  letter-spacing: 0.48px
  line-height: 36px
  position: absolute
  text-align: center
  top: 1079px
  white-space: nowrap
  width: 221px

.text-13
  left: 808px
  letter-spacing: 0.36px
  line-height: 24px
  position: absolute
  text-align: center
  top: 1230px
  width: 371px

.text-14
  left: 20px
  letter-spacing: 0
  line-height: 41.6px
  position: absolute
  text-align: center
  top: 1525px
  width: 1160px

.text-19
  left: 7px
  letter-spacing: 0
  line-height: 41.6px
  position: absolute
  text-align: center
  top: 4449px
  width: 1153px

.p-atric-king-cto
  left: 474px
  letter-spacing: 2.52px
  line-height: 18.2px
  position: absolute
  text-align: center
  top: 4746px
  white-space: nowrap
  width: 156px

.everlane
  left: 630px
  letter-spacing: 2.52px
  position: absolute
  text-align: center
  top: 4747px
  width: 96px

.text-20
  left: 62px
  letter-spacing: 1.86px
  line-height: 80.6px
  position: absolute
  text-align: center
  top: 5153px
  white-space: nowrap
  width: 1076px

.text-26
  left: 253px
  letter-spacing: 1.62px
  line-height: 54px
  position: absolute
  text-align: center
  top: 5975px
  white-space: nowrap
  width: 694px

.text-32
  left: 206px
  letter-spacing: 1.62px
  line-height: 54px
  position: absolute
  text-align: center
  top: 6629px
  white-space: nowrap
  width: 788px

.text-33
  left: 206px
  letter-spacing: 1.62px
  line-height: 54px
  position: absolute
  text-align: center
  top: 6691px
  white-space: nowrap
  width: 788px

.get-started-free-1
  left: 402px
  letter-spacing: 0
  line-height: 29px
  position: absolute
  text-align: center
  top: 6793px
  white-space: nowrap
  width: 179px

.talk-to-sales
  left: 653px
  letter-spacing: 0
  line-height: 31.2px
  position: absolute
  text-align: center
  top: 6793px
  white-space: nowrap
  width: 132px

.text-34
  left: 72px
  letter-spacing: 0
  line-height: 18.2px
  position: absolute
  top: 7137px
  width: 285px

.get-started
  left: 72px
  letter-spacing: 0
  line-height: 29px
  position: absolute
  text-align: center
  top: 7269px
  white-space: nowrap
  width: 82px

.log-in
  left: 206px
  letter-spacing: 0
  line-height: 23.4px
  position: absolute
  top: 7271px
  white-space: nowrap
  width: 49px

.developers-1
  left: 422px
  letter-spacing: 2.52px
  line-height: 18.2px
  position: absolute
  top: 7103px
  white-space: nowrap
  width: 121px

.text-35
  left: 422px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7141px
  white-space: nowrap
  width: 174px

.developer-docs
  left: 422px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7169px
  white-space: nowrap
  width: 105px

.text-36
  left: 422px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7197px
  white-space: nowrap
  width: 145px

.integrations
  left: 702px
  letter-spacing: 2.52px
  line-height: 18.2px
  position: absolute
  top: 7103px
  white-space: nowrap
  width: 135px

.curl
  left: 702px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7141px
  white-space: nowrap
  width: 50px

.nodejs
  left: 702px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7169px
  white-space: nowrap
  width: 88px

.python
  left: 702px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7197px
  white-space: nowrap
  width: 51px

.nextjs
  left: 702px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7225px
  white-space: nowrap
  width: 46px

.gatsby
  left: 702px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7253px
  white-space: nowrap
  width: 47px

.place
  left: 796px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7141px
  white-space: nowrap
  width: 50px

.nodejs-1
  left: 796px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7169px
  white-space: nowrap
  width: 88px

.python-1
  left: 796px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7197px
  white-space: nowrap
  width: 51px

.nextjs-1
  left: 796px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7225px
  white-space: nowrap
  width: 46px

.gatsby-1
  left: 796px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7253px
  white-space: nowrap
  width: 47px

.resources-1
  left: 982px
  letter-spacing: 2.52px
  line-height: 18.2px
  position: absolute
  top: 7103px
  white-space: nowrap
  width: 111px

.user-guides
  left: 982px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7141px
  white-space: nowrap
  width: 82px

.blog
  left: 982px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7169px
  white-space: nowrap
  width: 30px

.community-forum
  left: 982px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7197px
  white-space: nowrap
  width: 121px

.saa-s-templates
  left: 982px
  letter-spacing: 0
  line-height: 18.2px
  position: absolute
  top: 7225px
  white-space: nowrap
  width: 150px

.partners
  left: 982px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7253px
  white-space: nowrap
  width: 56px

.offering
  left: 422px
  letter-spacing: 2.52px
  line-height: 18.2px
  position: absolute
  top: 7314px
  white-space: nowrap
  width: 87px

.features
  left: 422px
  letter-spacing: 0
  line-height: 18.2px
  position: absolute
  top: 7352px
  white-space: nowrap
  width: 55px

.pricing-1
  left: 422px
  letter-spacing: 0
  line-height: 18.2px
  position: absolute
  top: 7380px
  white-space: nowrap
  width: 43px

.use-cases-1
  left: 702px
  letter-spacing: 2.52px
  line-height: 18.2px
  position: absolute
  top: 7314px
  white-space: nowrap
  width: 104px

.text-37
  left: 702px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7352px
  white-space: nowrap
  width: 182px

.virtual-dmz
  left: 702px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7380px
  white-space: nowrap
  width: 120px

.text-38
  left: 702px
  letter-spacing: 0
  line-height: 41.6px
  position: absolute
  top: 7399px
  white-space: nowrap
  width: 172px

.secure-apps-1
  left: 702px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7436px
  white-space: nowrap
  width: 132px

.routing-1
  left: 702px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7464px
  white-space: nowrap
  width: 115px

.company-1
  left: 982px
  letter-spacing: 2.52px
  line-height: 18.2px
  position: absolute
  top: 7314px
  white-space: nowrap
  width: 88px

.about
  left: 982px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7352px
  white-space: nowrap
  width: 39px

.careers
  left: 982px
  letter-spacing: 0.42px
  line-height: 18.2px
  position: absolute
  top: 7380px
  white-space: nowrap
  width: 57px

.text-39
  left: 1039px
  letter-spacing: 0.42px
  position: absolute
  top: 7381px
  width: 6px

.copyright
  left: 50px
  letter-spacing: 0
  line-height: 15.6px
  position: absolute
  top: 7573px
  white-space: nowrap
  width: 111px

.security
  left: 191px
  letter-spacing: 0
  line-height: 15.6px
  position: absolute
  top: 7573px
  white-space: nowrap
  width: 40px

.privacy-policy
  left: 261px
  letter-spacing: 0
  line-height: 15.6px
  position: absolute
  top: 7573px
  white-space: nowrap
  width: 70px

.terms-of-service
  left: 361px
  letter-spacing: 0
  line-height: 15.6px
  position: absolute
  top: 7573px
  white-space: nowrap
  width: 82px
</style>
