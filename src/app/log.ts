
export default function(tag: any, data: any) {
    if (process.env.NODE_ENV === 'development') {
      /* tslint:disable */
      console.log(tag, data);
      /* tslint:enable */
    }
  }
