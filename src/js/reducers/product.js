import {createReducer} from '../utils';

const initialState = {

  products:[
    {
      id:1,
      imagePath: 'img/startup-framework.png',
      productTitle:'Centric Cloud',
      productInfo:'Use our Cloud platform for PLM!',
      plans:[
        {
          planId: 1,
          planIconClass: "fa fa-shopping-cart fa-stack-1x fa-inverse",
          planTitle: "Bronze",
          planInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          planButtonClass: "primary",
          planButtonText: "Buy"
        },
        {
          planId: 2,
          planIconClass: "fa fa-laptop fa-stack-1x fa-inverse",
          planTitle: "Silver",
          planInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          planButtonClass: "danger",
          planButtonText: "Coming Soon!"
        },
        {
          planId: 3,
          planIconClass: "fa fa-lock fa-stack-1x fa-inverse",
          planTitle: "Gold",
          planInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          planButtonClass: "danger",
          planButtonText: "Coming Soon!"
        }
      ]
    },
    {
      id:2,
      imagePath: 'img/roundicons.png',
      productTitle:'Field Testing App',
      productInfo:'Give your products a flawless quality!',
      plans:[
        {
          planId: 1,
          planIconClass: "fa fa-shopping-cart fa-stack-1x fa-inverse",
          planTitle: "Bronze",
          planInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          planButtonClass: "danger",
          planButtonText: "Coming Soon!"
        },
        {
          planId: 2,
          planIconClass: "fa fa-laptop fa-stack-1x fa-inverse",
          planTitle: "Silver",
          planInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          planButtonClass: "danger",
          planButtonText: "Coming Soon!"
        },
        {
          planId: 3,
          planIconClass: "fa fa-lock fa-stack-1x fa-inverse",
          planTitle: "Gold",
          planInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          planButtonClass: "danger",
          planButtonText: "Coming Soon!"
        }
      ]
    },
    {
      id:3,
      imagePath: 'img/treehouse.png',
      productTitle:'Web Collection',
      productInfo:'Manage your orders with ease!',
      plans:[
        {
          planId: 1,
          planIconClass: "fa fa-shopping-cart fa-stack-1x fa-inverse",
          planTitle: "Bronze",
          planInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          planButtonClass: "danger",
          planButtonText: "Coming Soon!"
        },
        {
          planId: 2,
          planIconClass: "fa fa-laptop fa-stack-1x fa-inverse",
          planTitle: "Silver",
          planInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          planButtonClass: "danger",
          planButtonText: "Coming Soon!"
        },
        {
          planId: 3,
          planIconClass: "fa fa-lock fa-stack-1x fa-inverse",
          planTitle: "Gold",
          planInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          planButtonClass: "danger",
          planButtonText: "Coming Soon!"
        }
      ]
    }
  ]

};

export default createReducer(initialState, {

});
