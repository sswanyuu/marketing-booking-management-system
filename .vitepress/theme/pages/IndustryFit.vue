<template>
  <div class="industry-fit d-flex flex-column align-items-center">
    <!-- hero -->
    <section
      class="hero d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start"
    >
      <img
        src="../assets/images/pages/industry-fit/hero-bg.png"
        alt="hero"
        class="hero__bg--desktop d-none d-md-block"
      />
      <img
        src="../assets/images/pages/industry-fit/hero-bg-mobile.png"
        alt="hero"
        class="hero__bg--mobile d-block d-md-none"
      />
      <div
        class="hero__content flex-column w-100 gap-md-8 gap-7 justify-content-center text-white d-flex"
      >
        <div
          class="d-flex flex-column gap-2 align-items-center align-items-md-start"
        >
          <div class="md-headline-2-bold headline-3-bold">Industry Fit</div>
        </div>
        <Button
          variant="primary"
          class="align-self-start"
          @click="handleDemoBooking"
        >
          Book Demo
        </Button>
      </div>
    </section>
    <!-- successful cases -->
    <section class="successful-cases w-100 bg-primary">
      <div
        class="successful-cases__container d-flex flex-column align-items-center"
      >
        <div
          class="successful-cases__header d-flex flex-column gap-3 gap-md-6 align-items-center text-center mx-3 text-white"
        >
          <div class="md-headline-1-bold headline-4-bold">
            Industry Success Stories
          </div>

          <div class="body-2 md-headline-1-regular">
            Fullkeep is designed for different restaurant formats. From high-end
            private dining to wedding venues.
          </div>
        </div>
        <img
          src="../assets/images/pages/industry-fit/successful-cases-banner.png"
          alt="successful-cases"
          class="successful-cases__image w-100 rounded-4"
        />
        <div
          class="successful-cases__info bg-white rounded-4 d-flex flex-column flex-md-row justify-content-md-center border border-gray align-items-center px-6 py-6"
        >
          <div class="content-container d-flex flex-column gap-4">
            <div class="md-headline-3-bold headline-4-bold">
              Fine Teppanyaki
            </div>
            <div class="body-2 md-headline-2-regular text-gray">
              Fullkeep is designed for different restaurant formats. From
              high-end private dining to wedding venues, we provide flexible
              reservations, deposit payments, multi-language integration, and
              customer data management, helping all types of restaurants create
              stable, smooth reservation experiences that enhance the quality
              and efficiency of every dining occasion.
            </div>
          </div>
          <div class="row gx-4 gy-2">
            <div
              v-for="icon in successfulCasesIcons"
              :key="icon.title"
              class="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center gap-3"
            >
              <div
                class="icon-container d-flex align-items-center justify-content-center rounded-4 border border-gray"
              >
                <img :src="icon.image" :alt="icon.title" />
              </div>
              <div class="icon-title body-2 md-body-1 text-center">
                {{ icon.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--items-->
    <section
      class="items w-100 d-flex justify-content-center align-items-center"
    >
      <div class="items__list d-flex flex-column">
        <div
          v-for="item in industryFeatures"
          :key="item.title"
          class="item-container d-flex align-items-center"
        >
          <img class="item__image" :src="item.image" :alt="item.title" />

          <div class="d-flex flex-column gap-3 gap-md-7 px-4 px-md-0">
            <div class="item__title md-headline-3-bold headline-4-bold">
              {{ item.title }}
            </div>
            <div class="item__list gap-2 gap-md-3 flex-column d-flex text-gray">
              <div
                v-for="(point, pointIndex) in item.points"
                :key="point"
                class="list-point-container d-flex gap-2"
                data-aos="fade-up"
                :data-aos-delay="pointIndex * 200"
              >
                <img
                  src="../assets/icons/check.svg"
                  alt="check-icon"
                  class="align-self-start"
                />
                <div class="list-point body-2 md-headline-2-regular">
                  {{ point }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--feedback-->
    <section
      class="feedback w-100 d-flex justify-content-center align-items-center flex-column bg-tertiary overflow-hidden"
    >
      <div class="headline-4-bold md-headline-1-bold text-center mb-7 mb-md-11">
        Hear What They Say
      </div>

      <!-- Feedback Animation Container -->
      <div
        class="px-3 px-md-5 w-100"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div
          ref="trackRef"
          class="feedback__track gap-3 gap-md-5 d-flex overflow-visible"
        >
          <!-- First set of cards -->
          <div
            v-for="(feedback, index) in feedbackData"
            :key="`first-${index}`"
          >
            <div
              class="feedback-card px-5 px-md-9 d-flex flex-column align-items-center gap-4 gap-md-5 bg-white rounded-4 position-relative"
            >
              <img
                class="feedback-card__bg position-absolute"
                src="../assets/images/pages/industry-fit/feedback-bg.png"
                alt="background"
              />
              <div
                class="feedback-card__content d-flex flex-column gap-4 gap-md-5"
              >
                <div class="body-2 md-body-1">
                  {{ feedback.content }}
                </div>
                <div class="d-flex align-items-center gap-8">
                  <div class="headline-7-bold">
                    {{ feedback.name }}
                  </div>
                  <div class="d-flex align-items-center gap-1">
                    <img
                      v-for="star in 5"
                      :key="star"
                      src="../assets/icons/star.svg"
                      alt="star"
                      class="star-icon"
                    />
                    <span>{{ feedback.rating }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Duplicate set for seamless loop -->
          <div
            v-for="(feedback, index) in feedbackData"
            :key="`first-${index}`"
          >
            <div
              class="feedback-card px-5 px-md-9 d-flex flex-column align-items-center gap-4 gap-md-5 bg-white rounded-4"
            >
              <img
                class="feedback-card__bg position-absolute"
                src="../assets/images/pages/industry-fit/feedback-bg.png"
                alt="background"
              />
              <div
                class="feedback-card__content d-flex flex-column gap-4 gap-md-5"
              >
                <div class="body-2 md-body-1">
                  {{ feedback.content }}
                </div>
                <div class="d-flex align-items-center gap-8">
                  <div class="headline-7-bold">
                    {{ feedback.name }}
                  </div>
                  <div class="d-flex align-items-center gap-1">
                    <img
                      v-for="star in 5"
                      :key="star"
                      src="../assets/icons/star.svg"
                      alt="star"
                      class="star-icon"
                    />
                    <span>{{ feedback.rating }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Controls at Bottom -->
      <div
        class="mt-6 mt-md-8 d-flex justify-content-center align-items-center gap-3 mt-4"
      >
        <Button
          variant="arrow-left"
          @click="prevFeedback"
          @mouseenter="handleButtonMouseEnter"
          @mouseleave="handleButtonMouseLeave"
        />
        <Button
          variant="arrow-right"
          @click="nextFeedback"
          @mouseenter="handleButtonMouseEnter"
          @mouseleave="handleButtonMouseLeave"
        />
      </div>
    </section>
    <!--best solutions-->
    <section
      class="best-solutions w-100 d-flex justify-content-center align-items-center flex-column"
    >
      <div class="headline-4-bold md-headline-1-bold text-center px-5 px-md-0">
        Best Solutions for More Restaurant Types
      </div>
      <div class="row gx-4 gx-md-9 gy-6 gy-md-9">
        <div
          v-for="solution in solutions"
          :key="solution.title"
          class="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center gap-3"
        >
          <img :src="solution.image" :alt="solution.title" />

          <div class="icon-title body-2 md-body-1">{{ solution.title }}</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import Button from '../components/Button.vue';
import { useFeedbackCarousel } from '../composables/useFeedbackCarousel.js';
import { useNavigation } from '../composables/useNavigation.js';

const { handleDemoBooking } = useNavigation();
import SuccessfulCasesIcon1 from '../assets/images/pages/industry-fit/successful-case-icon-1.png';
import SuccessfulCasesIcon2 from '../assets/images/pages/industry-fit/successful-case-icon-2.png';
import SuccessfulCasesIcon3 from '../assets/images/pages/industry-fit/successful-case-icon-3.png';
import SuccessfulCasesIcon4 from '../assets/images/pages/industry-fit/successful-case-icon-4.png';
import Feature1 from '../assets/images/pages/industry-fit/feature-1.png';
import Feature2 from '../assets/images/pages/industry-fit/feature-2.png';
import Feature3 from '../assets/images/pages/industry-fit/feature-3.png';
import Solution1 from '../assets/images/pages/industry-fit/solution-1.png';
import Solution2 from '../assets/images/pages/industry-fit/solution-2.png';
import Solution3 from '../assets/images/pages/industry-fit/solution-3.png';
import Solution4 from '../assets/images/pages/industry-fit/solution-4.png';
import Solution5 from '../assets/images/pages/industry-fit/solution-5.png';
import Solution6 from '../assets/images/pages/industry-fit/solution-6.png';
import Solution7 from '../assets/images/pages/industry-fit/solution-7.png';
import Solution8 from '../assets/images/pages/industry-fit/solution-8.png';

const successfulCasesIcons = [
  {
    title: 'Low Table Turnover',
    image: SuccessfulCasesIcon1,
  },
  {
    title: 'Special Table Arrangements',
    image: SuccessfulCasesIcon2,
  },
  {
    title: 'Set Menu System',
    image: SuccessfulCasesIcon3,
  },
  {
    title: 'Premium Ingredients',
    image: SuccessfulCasesIcon4,
  },
];

const industryFeatures = [
  {
    title: 'Precise Time Slot & Seat Management',
    description:
      "Fullkeep's table type and time slot reservation rules can precisely arrange each table seating, avoiding empty tables and duplicate reservations.",
    image: Feature1,

    points: [
      "Fullkeep's table type and time slot reservation rules can precisely arrange each table seating, avoiding empty tables and duplicate reservations.",
      'Support distinction between "bar seating" and "private rooms", making reservation allocation more flexible.',
    ],
  },
  {
    title: 'Deposit Payment System',
    description:
      'Freely set per-person deposits to ensure premium ingredients (such as wagyu, lobster) are adequately prepared, reducing losses from last-minute cancellations.',
    image: Feature2,

    points: [
      'Freely set per-person deposits to ensure premium ingredients (such as wagyu, lobster) are adequately prepared, reducing losses from last-minute cancellations.',
      "Allow customers to select meal packages (such as chef's menu, lobster menu) during reservation, with notes for allergies, doneness preferences, enabling kitchen to prepare in advance.",
    ],
  },
  {
    title: 'Marketing & Re-engagement',
    description:
      "Record customer spending, dining dates, and preferences, then push premium package offers for holidays (such as Valentine's Day, anniversaries).",
    image: Feature3,

    points: [
      "Record customer spending, dining dates, and preferences, then push premium package offers for holidays (such as Valentine's Day, anniversaries).",
      "Convert repeat diners into returning customers, such as pushing new menus, chef's special tasting experiences.",
    ],
  },
];

const solutions = [
  {
    title: 'Winery',
    image: Solution1,
  },
  {
    title: 'Highway Restaurant',
    image: Solution2,
  },
  {
    title: 'Omakase Restaurant',
    image: Solution3,
  },
  {
    title: 'Theme Restaurant',
    image: Solution4,
  },
  {
    title: 'Michelin Restaurant',
    image: Solution5,
  },
  {
    title: 'Japanese Restaurant',
    image: Solution6,
  },
  {
    title: 'Scenic Restaurant',
    image: Solution7,
  },
  {
    title: 'Resort',
    image: Solution8,
  },
];

const feedbackData = [
  {
    content:
      'Our teppanyaki restaurant has limited seats daily. We used to frequently encounter last-minute cancellations, and ingredients were wasted. After implementing Fullkeep, customers can pay a deposit when booking, which not only reduces no-shows but also allows us to manage ingredients more precisely. Operations are much more secure now.',
    name: 'Tom',
    rating: '5.0',
  },
  {
    content:
      'Our teppanyaki restaurant has limited seats daily. We used to frequently encounter last-minute cancellations, and ingredients were wasted. After implementing Fullkeep, customers can pay a deposit when booking, which not only reduces no-shows but also allows us to manage ingredients more precisely. Operations are much more secure now.',
    name: 'Emma',
    rating: '5.0',
  },
  {
    content:
      'What we love most about Fullkeep is its marketing tools. After customers dine, the system helps us send promotional notifications or holiday package information. Many regular customers return because of this. Compared to traditional methods, the return visit rate is really much higher now.',
    name: 'John',
    rating: '5.0',
  },
  {
    content:
      'Our teppanyaki restaurant has limited seats daily. We used to frequently encounter last-minute cancellations, and ingredients were wasted. After implementing Fullkeep, customers can pay a deposit when booking, which not only reduces no-shows but also allows us to manage ingredients more precisely. Operations are much more secure now.',
    name: 'Bob',
    rating: '5.0',
  },
  {
    content:
      'What we love most about Fullkeep is its marketing tools. After customers dine, the system helps us send promotional notifications or holiday package information. Many regular customers return because of this. Compared to traditional methods, the return visit rate is really much higher now.',
    name: 'Cindy',
    rating: '5.0',
  },
  {
    content:
      'Our teppanyaki restaurant has limited seats daily. We used to frequently encounter last-minute cancellations, and ingredients were wasted. After implementing Fullkeep, customers can pay a deposit when booking, which not only reduces no-shows but also allows us to manage ingredients more precisely. Operations are much more secure now.',
    name: 'Leon',
    rating: '5.0',
  },
  {
    content:
      'What we love most about Fullkeep is its marketing tools. After customers dine, the system helps us send promotional notifications or holiday package information. Many regular customers return because of this. Compared to traditional methods, the return visit rate is really much higher now.',
    name: 'May',
    rating: '5.0',
  },
  {
    content:
      'Our teppanyaki restaurant has limited seats daily. We used to frequently encounter last-minute cancellations, and ingredients were wasted. After implementing Fullkeep, customers can pay a deposit when booking, which not only reduces no-shows but also allows us to manage ingredients more precisely. Operations are much more secure now.',
    name: 'kevin',
    rating: '5.0',
  },
];

// ===== FEEDBACK CAROUSEL =====
const {
  trackRef,
  nextFeedback,
  prevFeedback,
  handleMouseEnter,
  handleMouseLeave,
  handleButtonMouseEnter,
  handleButtonMouseLeave,
} = useFeedbackCarousel(feedbackData);
</script>
