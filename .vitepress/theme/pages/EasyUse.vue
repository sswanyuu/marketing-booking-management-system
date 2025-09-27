<template>
  <div class="easy-use d-flex flex-column align-items-center">
    <!-- hero -->
    <section
      class="hero d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start"
    >
      <img
        src="../assets/images/pages/easy-use/hero-bg.png"
        alt="hero"
        class="background-image__desktop d-none d-md-block"
      />
      <img
        src="../assets/images/pages/easy-use/hero-bg-mobile.png"
        alt="hero"
        class="background-image__mobile d-block d-md-none"
      />
      <div
        class="hero__content flex-column w-100 gap-md-8 gap-7 justify-content-center text-white d-flex"
      >
        <div
          class="d-flex flex-column gap-2 align-items-center align-items-md-start"
        >
          <div class="md-headline-2-bold headline-3-bold">Easy Use</div>
          <div class="md-headline-2-bold headline-3-bold">優良使用體驗</div>
        </div>
        <Button variant="primary" class="align-self-start d-none d-md-block">
          預約 Demo
        </Button>
        <Button variant="mobileFull" class="d-block d-md-none">
          預約 Demo
        </Button>
      </div>
    </section>
    <section
      class="items w-100 d-flex justify-content-center align-items-center"
    >
      <div class="items__list d-flex flex-column">
        <div class="item-container d-flex">
          <img
            class="item__image d-md-block d-none"
            src="../assets/images/pages/easy-use/item-1.png"
            alt="item-1"
          />
          <img
            class="item__image d-md-none d-block"
            src="../assets/images/pages/easy-use/item-1-mobile.png"
            alt="item-1"
          />
          <div class="item__content d-flex flex-column">
            <div
              class="item__title-container d-flex flex-column gap-3 gap-md-6"
            >
              <div class="item__title md-headline-1-bold headline-4-bold">
                直覺化介面
              </div>
              <div
                class="item__description text-gray body-2 md-headline-1-regular"
              >
                依桌型、時段彈性安排，優化現場動線與翻桌率。
              </div>
            </div>
            <div class="item__list gap-2 gap-md-3 flex-column d-flex">
              <div class="list-point-container d-flex gap-2">
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  顧客線上訂位、店員也能代客填寫
                </div>
              </div>
              <div class="list-point-container d-flex gap-2">
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  支援手機、平板與桌機操作
                </div>
              </div>
              <div class="list-point-container d-flex gap-2">
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  店員可代客快速建檔訂位
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-container d-flex">
          <img
            class="item__image d-md-block d-none"
            src="../assets/images/pages/easy-use/item-2.png"
            alt="item-2"
          />
          <img
            class="item__image d-md-none d-block"
            src="../assets/images/pages/easy-use/item-2-mobile.png"
            alt="item-2"
          />
          <div class="item__content d-flex flex-column">
            <div
              class="item__title-container d-flex flex-column gap-3 gap-md-6"
            >
              <div class="item__title md-headline-1-bold headline-4-bold">
                桌位管理
              </div>
              <div
                class="item__description text-gray body-2 md-headline-1-regular"
              >
                依桌型、時段彈性安排，優化現場動線與翻桌率。
              </div>
            </div>
            <div class="item__list gap-2 gap-md-3 flex-column d-flex">
              <div class="list-point-container d-flex gap-2">
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  VIP包廂、吧台區域都能納入排位邏輯
                </div>
              </div>
              <div class="list-point-container d-flex gap-2">
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  自動避開重疊、按桌型優先建議配置
                </div>
              </div>
              <div class="list-point-container d-flex gap-2">
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  提升翻桌率與現場動線效率
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-container d-flex">
          <img
            class="item__image d-md-block d-none"
            src="../assets/images/pages/easy-use/item-3.png"
            alt="item-3"
          />
          <img
            class="item__image d-md-none d-block"
            src="../assets/images/pages/easy-use/item-3-mobile.png"
            alt="item-3"
          />

          <div class="item__content d-flex flex-column">
            <div
              class="item__title-container d-flex flex-column gap-3 gap-md-6"
            >
              <div class="item__title md-headline-1-bold headline-4-bold">
                彈性調整機制
              </div>
              <div
                class="item__description text-gray body-2 md-headline-1-regular"
              >
                顧客可變更人數或餐點，無需取消重訂，彈性又省時。
              </div>
            </div>
            <div class="item__list gap-2 gap-md-3 flex-column d-flex">
              <div class="list-point-container d-flex gap-2">
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  現場人數變動，店員也能即時更新預約資訊
                </div>
              </div>
              <div class="list-point-container d-flex gap-2">
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  調整人數、時間、餐點，無需重新預約
                </div>
              </div>
              <div class="list-point-container d-flex gap-2">
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  前台與後台同時掌握最新資訊
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-container d-flex">
          <img
            class="item__image d-md-block d-none"
            src="../assets/images/pages/easy-use/item-4.png"
            alt="item-4"
          />
          <img
            class="item__image d-md-none d-block"
            src="../assets/images/pages/easy-use/item-4-mobile.png"
            alt="item-4"
          />
          <div class="item__content d-flex flex-column">
            <div
              class="item__title-container d-flex flex-column gap-3 gap-md-6"
            >
              <div class="item__title md-headline-1-bold headline-4-bold">
                平假日設定功能
              </div>
              <div
                class="item__description text-gray body-2 md-headline-1-regular"
              >
                自由設定不同日子的訂位規則與營運時間，彈性營運無負擔。
              </div>
            </div>
            <div class="item__list gap-2 gap-md-3 flex-column d-flex">
              <div class="list-point-container d-flex gap-2">
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  自由設定不同日子的營運規則
                </div>
              </div>
              <div class="list-point-container d-flex gap-2">
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  自動對應營業時段與人力排程
                </div>
              </div>
              <div class="list-point-container d-flex gap-2">
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  特別營業日、臨時公休一鍵調整
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import '../../../scss/pages/_easy-use.scss';
</style>
