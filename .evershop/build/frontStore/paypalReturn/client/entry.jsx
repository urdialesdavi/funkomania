
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Area from '@evershop/evershop/src/components/common/Area';
      import Hydrate from '@evershop/evershop/src/components/common/react/client/HydrateFrontStore';
      
Area.defaultProps.components = {
  'icon-wrapper': {
    '9cfbb841abe9ad4e5d5987512bf00687': {
      id: '9cfbb841abe9ad4e5d5987512bf00687',
      sortOrder: 5,
      component: require('C:\\Users\\davib\\Downloads\\evershop\\node_modules\\@evershop\\evershop\\src\\modules\\catalog\\pages\\frontStore\\all\\SearchBox.jsx')
    },
    db7a1f3642fb1113f1cdaa4b6e0dfcf8: {
      id: 'db7a1f3642fb1113f1cdaa4b6e0dfcf8',
      sortOrder: 10,
      component: require('C:\\Users\\davib\\Downloads\\evershop\\node_modules\\@evershop\\evershop\\src\\modules\\checkout\\pages\\frontStore\\all\\MiniCart.jsx')
    },
    '1f94e1f115efa75abb68f5d5ebdc127c': {
      id: '1f94e1f115efa75abb68f5d5ebdc127c',
      sortOrder: 30,
      component: require('C:\\Users\\davib\\Downloads\\evershop\\node_modules\\@evershop\\evershop\\src\\modules\\customer\\pages\\frontStore\\all\\UserIcon.jsx')
    },
    '50334bf4fee8e05f26a26a19a167a98b': {
      id: '50334bf4fee8e05f26a26a19a167a98b',
      sortOrder: 50,
      component: require('C:\\Users\\davib\\Downloads\\evershop\\themes\\funkomania\\pages\\all\\MobileMenu.jsx')
    }
  },
  content: {
    '93eef20b77060bf9d94e428dd6abb0db': {
      id: '93eef20b77060bf9d94e428dd6abb0db',
      sortOrder: 0,
      component: require('C:\\Users\\davib\\Downloads\\evershop\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\frontStore\\all\\Breadcrumb.jsx')
    },
    '4819fd7a4c483821e3fee246bbdce0d3': {
      id: '4819fd7a4c483821e3fee246bbdce0d3',
      sortOrder: 10,
      component: require('C:\\Users\\davib\\Downloads\\evershop\\node_modules\\@evershop\\evershop\\src\\modules\\paypal\\pages\\frontStore\\paypalReturn\\Error.jsx')
    },
    f709e906df7a9b3881028288ed310a31: {
      id: 'f709e906df7a9b3881028288ed310a31',
      sortOrder: 50,
      component: require('C:\\Users\\davib\\Downloads\\evershop\\themes\\funkomania\\pages\\all\\Newsletter.jsx')
    }
  },
  footer: {
    '4b1b2cf570338276048ddaa382ffbe31': {
      id: '4b1b2cf570338276048ddaa382ffbe31',
      sortOrder: 10,
      component: require('C:\\Users\\davib\\Downloads\\evershop\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\frontStore\\all\\Footer.jsx')
    }
  },
  head: {
    ef7ab5dff275c1b3eb6184669b7cba30: {
      id: 'ef7ab5dff275c1b3eb6184669b7cba30',
      sortOrder: 5,
      component: require('C:\\Users\\davib\\Downloads\\evershop\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\frontStore\\all\\HeadTags.jsx')
    }
  },
  body: {
    '3c9c24e153aa53bbc6da1475fe307466': {
      id: '3c9c24e153aa53bbc6da1475fe307466',
      sortOrder: 1,
      component: require('C:\\Users\\davib\\Downloads\\evershop\\themes\\funkomania\\pages\\all\\Layout.jsx')
    },
    '907bec39c642dd741230eea7d6a57dcd': {
      id: '907bec39c642dd741230eea7d6a57dcd',
      sortOrder: 10,
      component: require('C:\\Users\\davib\\Downloads\\evershop\\node_modules\\@evershop\\evershop\\src\\modules\\cms\\pages\\frontStore\\all\\Notification.jsx')
    }
  },
  header: {
    '714cc50e19aef2f1ebdd435522b1dfb4': {
      id: '714cc50e19aef2f1ebdd435522b1dfb4',
      sortOrder: 5,
      component: require('C:\\Users\\davib\\Downloads\\evershop\\themes\\funkomania\\pages\\all\\Logo.jsx')
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/CollectionProducts.jsx')
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/TextBlock.jsx')
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/BasicMenu.jsx')
    }
  }
} 
ReactDOM.hydrate(
        <Hydrate/>,
        document.getElementById('app')
      );