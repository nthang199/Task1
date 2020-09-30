<template>
  <div id="reviewOfCustomer">
    <div class="row ">
      <div
        class="col-xs-5ths center"
        v-for="(item, index) in listReviews"
        v-bind:key="index"
      >
        <Review v-bind:review="item" v-if="index < count * 5"></Review>
      </div>
    </div>
    <div>
      <a href="#" v-on:click="viewMore"><p>View More</p></a>
    </div>
  </div>
</template>

<script>
import Review from "./Review.vue";
export default {
  name: "reviewsOfCustomer",
  data() {
    return {
      count: 2,
      listReviews: [
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=427ec126038907e2388d7970239f654d&oe=5F99E5BB",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "user innisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        },
        {
          user: "userInnisfree",
          datetime: "5 days ago",
          image:
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/117036997_3269601256433766_4735313749046828501_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=yMtKcSI3AtoAX_-Mbts&oh=b00e7bb9316174190f4ce3d8b23d922b&oe=5F95F13B",
          review:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum "
        }
      ]
    };
  },
  components: { Review },
  methods: {
    viewMore() {
      // if (this.cout < Math.ceil(this.listReviews.length / 5)) {
      this.count += 1;
      // }
    }
  }
};
</script>

<style scope>
#reviewOfCustomer .center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.col-xs-5ths,
.col-sm-5ths,
.col-md-5ths,
.col-lg-5ths {
  position: relative;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
}

.col-xs-5ths {
  width: 20%;
  float: left;
}
#reviewOfCustomer a p {
  font-size: 30px;
  font-weight: 800;
  color: darkturquoise;
}
#reviewOfCustomer a p:hover {
  font-size: 30px;
  font-weight: 800;
  color: darkcyan;
}
#reviewOfCustomer a {
  text-decoration-color: darkturquoise;
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
}
#reviewOfCustomer a:hover {
  text-decoration-color: darkcyan;
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
}
@media (min-width: 768px) {
  .col-sm-5ths {
    width: 20%;
    float: left;
  }
}
@media (min-width: 992px) {
  .col-md-5ths {
    width: 20%;
    float: left;
  }
}

@media (min-width: 1200px) {
  .col-lg-5ths {
    width: 20%;
    float: left;
  }
}
</style>
