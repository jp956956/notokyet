<template>
  <b-container>
    <b-row class="pt-5" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:60%">
      <b-col>
        <h2 class="h2 bg-primary text-white">
          職棒賽事
        </h2>
        <vc-calendar
          class="custom-calendar max-w-full"
          :masks="masks"
          :attributes="attributes"
          disable-page-swipe
          is-expanded
        >
          <template v-slot:day-content="{ day, attributes }">
            <div class="flex flex-col h-full z-10 overflow-hidden">
              <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
              <div class="flex-grow overflow-y-auto overflow-x-auto">
                <p
                  v-for="attr in attributes"
                  class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
                  :class="attr.customData.class"
                >
                  {{ attr.customData.title }}
                </p>
              </div>
            </div>
          </template>
        </vc-calendar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    return {
      masks: {
        weekdays: 'WWW'
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-red-600 text-black'
          },
          dates: new Date(year, month, 1)
        },
        {
          key: 2,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-blue-500 ext-black'
          },
          dates: new Date(year, month, 2)
        },
        {
          key: 3,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-blue-500 ext-black'
          },
          dates: new Date(year, month, 3)
        },
        {
          key: 4,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-indigo-500 ext-black'
          },
          dates: new Date(year, month, 6)
        },
        {
          key: 5,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-pink-500 ext-black'
          },
          dates: new Date(year, month, 8)
        },
        {
          key: 6,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-orange-500 ext-black'
          },
          dates: new Date(year, month, 9)
        },
        {
          key: 7,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-pink-500 ext-black'
          },
          dates: new Date(year, month, 10)
        },
        {
          key: 8,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-red-600 ext-black'
          },
          dates: new Date(year, month, 12)
        },
        {
          key: 9,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-red-600 ext-black'
          },
          dates: new Date(year, month, 13)
        },
        {
          key: 10,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-red-600 ext-black'
          },
          dates: new Date(year, month, 15)
        },
        {
          key: 11,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-red-600 ext-black'
          },
          dates: new Date(year, month, 16)
        },
        {
          key: 12,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-red-600 ext-black'
          },
          dates: new Date(year, month, 17)
        },
        {
          key: 13,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-red-600 ext-black'
          },
          dates: new Date(year, month, 21)
        },
        {
          key: 14,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-red-600 ext-black'
          },
          dates: new Date(year, month, 22)
        },
        {
          key: 15,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-red-600 ext-black'
          },
          dates: new Date(year, month, 23)
        },
        {
          key: 16,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-red-600 ext-black'
          },
          dates: new Date(year, month, 24)
        },
        {
          key: 17,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-red-600 ext-black'
          },
          dates: new Date(year, month, 29)
        },
        {
          key: 18,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-red-600 ext-black'
          },
          dates: new Date(year, month, 30)
        },
        {
          key: 19,
          customData: {
            title: '統一獅 7 : 3 中信兄弟',
            class: 'bg-red-600 ext-black'
          },
          dates: new Date(year, month, 31)
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;
  & .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>
