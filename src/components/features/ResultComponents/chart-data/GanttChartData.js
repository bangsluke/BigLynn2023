const tasks = [
  {
    id: 'DVP_000001',
    name: 'Durability',
    start: '2022-07-27',
    // end: durabilityEndDate,
    end: '2022-08-20',
    progress: 'null',
    // progress: 30,
    dependencies: '',
    custom_class: 'DVP'
  },
  {
    id: 'PrepActivity_000001',
    name: 'Preparation Activities',
    description: 'Contact testing authorities, Order test parts and equipment, Set up test equipment',
    start: '2022-07-27',
    end: '2022-07-29',
    progress: null,
    dependencies: '',
    custom_class: 'PrepActivity'
  },
  {
    id: 'TestActivity_000001',
    name: 'Conduct Durability Test',
    start: '2022-07-29',
    end: '2022-08-15',
    progress: null,
    dependencies: 'PrepActivity_000001',
    custom_class: 'TestActivity'
  },
  {
    id: 'TestActivity_000002',
    name: 'Measure and Evaluate Results',
    start: '2022-08-15',
    end: '2022-08-18',
    progress: null,
    dependencies: 'TestActivity_000001',
    custom_class: 'TestActivity'
  },
  {
    id: 'TestActivity_000003',
    name: 'Sign Off Test Results',
    start: '2022-08-18',
    end: '2022-08-20',
    progress: null,
    dependencies: 'TestActivity_000002',
    custom_class: 'TestActivity'
  },

  {
    id: 'DVP_000002',
    name: 'Hot Climate',
    start: '2022-07-29',
    end: '2022-08-14',
    progress: 'null',
    // progress: 30,
    dependencies: '',
    custom_class: 'DVP'
  },
  {
    id: 'PrepActivity_000002',
    name: 'Preparation Activities',
    start: '2022-07-29',
    end: '2022-07-31',
    progress: null,
    dependencies: '',
    custom_class: 'PrepActivity'
  },
  {
    id: 'TestActivity_000004',
    name: 'Conduct Hot Climate Test',
    start: '2022-07-31',
    end: '2022-08-09',
    progress: null,
    dependencies: 'PrepActivity_000002',
    custom_class: 'TestActivity'
  },
  {
    id: 'TestActivity_000005',
    name: 'Measure and Evaluate Results',
    start: '2022-08-09',
    end: '2022-08-12',
    progress: null,
    dependencies: 'TestActivity_000004',
    custom_class: 'TestActivity'
  },
  {
    id: 'TestActivity_000006',
    name: 'Sign Off Test Results',
    start: '2022-08-12',
    end: '2022-08-14',
    progress: null,
    dependencies: 'TestActivity_000005',
    custom_class: 'TestActivity'
  },

  {
    id: 'DVP_000003',
    name: 'Cold Climate',
    start: '2022-08-02',
    end: '2022-08-29',
    progress: 'null',
    // progress: 30,
    dependencies: '',
    custom_class: 'DVP'
  },
  {
    id: 'PrepActivity_000003',
    name: 'Preparation Activities',
    start: '2022-08-02',
    end: '2022-08-05',
    progress: null,
    dependencies: '',
    custom_class: 'PrepActivity'
  },
  {
    id: 'TestActivity_000007',
    name: 'Conduct Cold Climate Test',
    start: '2022-08-05',
    end: '2022-08-13',
    progress: null,
    dependencies: 'PrepActivity_000003',
    custom_class: 'TestActivity'
  },
  {
    id: 'TestActivity_000008',
    name: 'Measure and Evaluate Results',
    start: '2022-08-13',
    end: '2022-08-15',
    progress: null,
    dependencies: 'TestActivity_000007',
    custom_class: 'TestActivity'
  },
  {
    id: 'TestActivity_000009',
    name: 'Sign Off Test Results',
    start: '2022-08-15',
    end: '2022-08-17',
    progress: null,
    dependencies: 'TestActivity_000008',
    custom_class: 'TestActivity'
  }

  // {
  //     id: 'DVP_000004',
  //     name: 'Front Crash',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: 'null',
  //     // progress: 30,
  //     dependencies: '',
  //     custom_class: 'DVP'
  // },
  // {
  //     id: 'PrepActivity_000004',
  //     name: 'Preparation Activities',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: '',
  //     custom_class: 'PrepActivity'
  // },
  // {
  //     id: 'TestActivity_000010',
  //     name: 'Conduct Front Crash Test',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'PrepActivity_000004',
  //     custom_class: 'TestActivity'
  // },
  // {
  //     id: 'TestActivity_000011',
  //     name: 'Measure and Evaluate Results',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'TestActivity_000010',
  //     custom_class: 'TestActivity'
  // },
  // {
  //     id: 'TestActivity_000012',
  //     name: 'Sign Off Test Results',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'TestActivity_000011',
  //     custom_class: 'TestActivity'
  // },
  // {
  //     id: 'DVP_000005',
  //     name: 'Side Crash',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: 'null',
  //     // progress: 30,
  //     dependencies: '',
  //     custom_class: 'DVP'
  // },
  // {
  //     id: 'PrepActivity_000005',
  //     name: 'Preparation Activities',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: '',
  //     custom_class: 'PrepActivity'
  // },
  // {
  //     id: 'TestActivity_000013',
  //     name: 'Conduct Side Crash Test',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'PrepActivity_000005',
  //     custom_class: 'TestActivity'
  // },
  // {
  //     id: 'TestActivity_000014',
  //     name: 'Measure and Evaluate Results',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'TestActivity_000013',
  //     custom_class: 'TestActivity'
  // },
  // {
  //     id: 'TestActivity_000015',
  //     name: 'Sign Off Test Results',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'TestActivity_000014',
  //     custom_class: 'TestActivity'
  // },
  // {
  //     id: 'DVP_000006',
  //     name: 'High Speed Performance',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: 'null',
  //     // progress: 30,
  //     dependencies: '',
  //     custom_class: 'DVP'
  // },
  // {
  //     id: 'PrepActivity_000006',
  //     name: 'Preparation Activities',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: '',
  //     custom_class: 'PrepActivity'
  // },
  // {
  //     id: 'TestActivity_000016',
  //     name: 'Conduct High Speed Performance Test',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'PrepActivity_000006',
  //     custom_class: 'TestActivity'
  // },
  // {
  //     id: 'TestActivity_000017',
  //     name: 'Measure and Evaluate Results',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'TestActivity_000016',
  //     custom_class: 'TestActivity'
  // },
  // {
  //     id: 'TestActivity_000018',
  //     name: 'Sign Off Test Results',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'TestActivity_000017',
  //     custom_class: 'TestActivity'
  // },
  // {
  //     id: 'DVP_000007',
  //     name: 'Vibration',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: 'null',
  //     // progress: 30,
  //     dependencies: '',
  //     custom_class: 'DVP'
  // },
  // {
  //     id: 'PrepActivity_000007',
  //     name: 'Preparation Activities',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: '',
  //     custom_class: 'PrepActivity'
  // },
  // {
  //     id: 'TestActivity_000019',
  //     name: 'Conduct Vibration Test',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'PrepActivity_000007',
  //     custom_class: 'TestActivity'
  // },
  // {
  //     id: 'TestActivity_000020',
  //     name: 'Measure and Evaluate Results',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'TestActivity_000019',
  //     custom_class: 'TestActivity'
  // },
  // {
  //     id: 'TestActivity_000021',
  //     name: 'Sign Off Test Results',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'TestActivity_000020',
  //     custom_class: 'TestActivity'
  // },
  // {
  //     id: 'DVP_000008',
  //     name: 'Water Tightness IP67',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: 'null',
  //     // progress: 30,
  //     dependencies: '',
  //     custom_class: 'DVP'
  // },
  // {
  //     id: 'PrepActivity_000008',
  //     name: 'Preparation Activities',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: '',
  //     custom_class: 'PrepActivity'
  // },
  // {
  //     id: 'TestActivity_000022',
  //     name: 'Conduct Water Tightness IP67 Test',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'PrepActivity_000008',
  //     custom_class: 'TestActivity'
  // },
  // {
  //     id: 'TestActivity_000023',
  //     name: 'Measure and Evaluate Results',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'TestActivity_000022',
  //     custom_class: 'TestActivity'
  // },
  // {
  //     id: 'TestActivity_000024',
  //     name: 'Sign Off Test Results',
  //     start: '2022-07-27',
  //     end: '2022-07-29',
  //     progress: null,
  //     dependencies: 'TestActivity_000023',
  //     custom_class: 'TestActivity'
  // }
];

export default tasks;
