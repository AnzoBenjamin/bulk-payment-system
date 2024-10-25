import paths from "./paths";

export const dashboardRoutes = {
  label: "Dashboard",
  labelDisable: true,
  children: [
    {
      name: "Dashboard",
      active: true,
      icon: "chart-pie",
      to: paths.saas, // Direct link to SaaS dashboard
    },
  ],
};

export const appRoutes = {
  label: "app",
  children: [
    {
      name: "Calendar",
      icon: "calendar-alt",
      to: paths.calendar,
      active: true,
    },

    /*
    {

        {
      name: "Chat",
      icon: "comments",
      to: paths.chat,
      active: true,
    },
      name: "Email",
      icon: "envelope-open",
      active: true,
      children: [
        {
          name: "Inbox",
          to: paths.emailInbox,
          active: true,
        },
        {
          name: "Email detail",
          to: paths.emailDetail,
          active: true,
        },
        {
          name: "Compose",
          to: paths.emailCompose,
          active: true,
        },
      ],
    },

    {
          name: "Product",
          active: true,
          children: [
            {
              name: "Add a product",
              to: paths.addProduct,
              active: true,
            },
            {
              name: "Product list",
              to: paths.products("product-list"),
              active: true,
            },
            {
              name: "Product grid",
              to: paths.products("product-grid"),
              active: true,
            },
            {
              name: "Product details",
              to: paths.productDetails(),
              active: true,
            },
          ],
        },

         
        {
          name: "Orders",
          active: true,
          children: [
            {
              name: "Order list",
              to: paths.orderList,
              active: true,
            },
            {
              name: "Order details",
              to: paths.orderDetails,
              active: true,
            },
          ],
        },

                {
          name: "Shopping cart",
          to: paths.shoppingCart,
          active: true,
        },
            {
      name: "Events",
      icon: "calendar-day",
      active: true,
      children: [
        {
          name: "Create an event",
          to: paths.createEvent,
          active: true,
        },
        {
          name: "Event detail",
          to: paths.eventDetail,
          active: true,
        },
        {
          name: "Event list",
          to: paths.eventList,
          active: true,
        },
      ],
    },
    */

    {
      name: "Payments",
      icon: "shopping-cart",
      active: true,
      children: [
       
        {
          name: "Employees",
          to: paths.customers,
          active: true,
        },
        {
          name: "Employee details",
          to: paths.customerDetails,
          active: true,
        },
        {
          name: "Bulk Payments",
          to: paths.createEvent,
          active: true
        },
        {
          name: "Collections",
          to: paths.checkout,
          active: true,
        },

        {
          name: "Invoice",
          to: paths.invoice,
          active: true,
        },
      ],
    },
    /*
    {
      name: "E Learning",
      icon: "graduation-cap",
      active: true,
      badge: {
        type: "success",
        text: "New",
      },
      children: [
        {
          name: "Course",
          active: true,
          children: [
            {
              name: "Create a course",
              to: paths.createCourse,
              active: true,
            },
            {
              name: "Course list",
              to: paths.courses("course-list"),
              active: true,
            },
            {
              name: "Course grid",
              to: paths.courses("course-grid"),
              active: true,
            },
            {
              name: "Course details",
              to: paths.courseDetails(),
              active: true,
            },
          ],
        },
        {
          name: "Student overview",
          to: paths.studentOverview,
          active: true,
        },
        {
          name: "Trainer profile",
          to: paths.trainerProfile,
          active: true,
        },
      ],
    },

    231{
      name: "Kanban",
      icon: ["fab", "trello"],
      to: paths.kanban,
      active: true,
    },
    */
    {
      name: "Social",
      icon: "share-alt",
      active: true,
      children: [

        {
          name: "Activity log",
          to: paths.activityLog,
          active: true,
        },
        {
          name: "Notifications",
          to: paths.notifications,
          active: true,
        },

      ],
    },
    {
      name: "Support desk",
      icon: "ticket-alt",
      active: true,
      children: [
        {
          name: "Table view",
          to: paths.ticketsTable,
          active: true,
        },

        {
          name: "Contacts",
          to: paths.contacts,
          active: true,
        },
        {
          name: "Contact details",
          to: paths.contactDetails,
          active: true,
        },

        {
          name: "Quick links",
          to: paths.quickLinks,
          active: true,
        },
        {
          name: "Reports",
          to: paths.reports,
          active: true,
        },
      ],
    },
  ],
};

export const pagesRoutes = {
  label: "pages",
  children: [
    {
      name: "Starter",
      icon: "flag",
      to: paths.starter,
      active: true,
    },
    {
      name: "Landing",
      icon: "globe",
      to: paths.landing,
      active: true,
    },
    {
      name: "Authentication",
      icon: "lock",
      active: true,
      children: [
        {
          name: "Simple",
          active: true,
          children: [
            {
              name: "Login",
              to: paths.simpleLogin,
              active: true,
            },
            {
              name: "Logout",
              to: paths.simpleLogout,
              active: true,
            },
            {
              name: "Register",
              to: paths.simpleRegister,
              active: true,
            },
            {
              name: "Forgot password",
              to: paths.simpleForgotPassword,
              active: true,
            },
            {
              name: "Confirm mail",
              to: paths.simpleConfirmMail,
              active: true,
            },
            {
              name: "Reset password",
              to: paths.simpleResetPassword,
              active: true,
            },
            {
              name: "Lock screen",
              to: paths.simpleLockScreen,
              active: true,
            },
          ],
        },
        {
          name: "Card",
          active: true,
          children: [
            {
              name: "Login",
              to: paths.cardLogin,
              active: true,
            },
            {
              name: "Logout",
              to: paths.cardLogout,
              active: true,
            },
            {
              name: "Register",
              to: paths.cardRegister,
              active: true,
            },
            {
              name: "Forgot password",
              to: paths.cardForgotPassword,
              active: true,
            },
            {
              name: "Confirm mail",
              to: paths.cardConfirmMail,
              active: true,
            },
            {
              name: "Reset password",
              to: paths.cardResetPassword,
              active: true,
            },
            {
              name: "Lock screen",
              to: paths.cardLockScreen,
              active: true,
            },
          ],
        },
        {
          name: "Split",
          active: true,
          children: [
            {
              name: "Login",
              to: paths.splitLogin,
              active: true,
            },
            {
              name: "Logout",
              to: paths.splitLogout,
              active: true,
            },
            {
              name: "Register",
              to: paths.splitRegister,
              active: true,
            },
            {
              name: "Forgot password",
              to: paths.splitForgotPassword,
              active: true,
            },
            {
              name: "Confirm mail",
              to: paths.splitConfirmMail,
              active: true,
            },
            {
              name: "Reset password",
              to: paths.splitResetPassword,
              active: true,
            },
            {
              name: "Lock screen",
              to: paths.splitLockScreen,
              active: true,
            },
          ],
        },
        {
          name: "Wizard",
          to: paths.authWizard,
          active: true,
        },
        {
          name: "Modal",
          to: "#!",
          active: true,
        },
      ],
    },
    {
      name: "User",
      icon: "user",
      active: true,
      children: [
        {
          name: "Profile",
          to: paths.userProfile,
          active: true,
        },
        {
          name: "Settings",
          to: paths.userSettings,
          active: true,
        },
      ],
    },
    {
      name: "Pricing",
      icon: "tags",
      active: true,
      children: [
        {
          name: "Pricing default",
          to: paths.pricingDefault,
          active: true,
        },
        {
          name: "Pricing alt",
          to: paths.pricingAlt,
          active: true,
        },
      ],
    },
    {
      name: "Faq",
      icon: "question-circle",
      active: true,
      children: [
        {
          name: "Faq basic",
          to: paths.faqBasic,
          active: true,
        },
        {
          name: "Faq alt",
          to: paths.faqAlt,
          active: true,
        },
        {
          name: "Faq accordion",
          to: paths.faqAccordion,
          active: true,
        },
      ],
    },
    {
      name: "Errors",
      active: true,
      icon: "exclamation-triangle",
      children: [
        {
          name: "404",
          to: paths.error404,
          active: true,
        },
        {
          name: "500",
          to: paths.error500,
          active: true,
        },
      ],
    },
    {
      name: "Miscellaneous",
      icon: "thumbtack",
      active: true,
      children: [
        {
          name: "Associations",
          to: paths.associations,
          active: true,
        },
        {
          name: "Invite people",
          to: paths.invitePeople,
          active: true,
        },
        {
          name: "Privacy policy",
          to: paths.privacyPolicy,
          active: true,
        },
      ],
    },
  ],
};

export const documentationRoutes = {
  label: "documentation",
  children: [
    {
      name: "Getting started",
      icon: "rocket",
      to: paths.gettingStarted,
      active: true,
    },
    
    {
      name: "Faq",
      icon: "question-circle",
      to: paths.faq,
      active: true,
    },
 
  ],
};
const routes = [ dashboardRoutes,
  appRoutes,
  documentationRoutes,
]
export default routes;
