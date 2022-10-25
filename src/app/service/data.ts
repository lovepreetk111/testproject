export interface IBannerCarosuelComponent{
  innerData: {
        header: string;
        text: string;
        buttonText: string;
    },
    background:{
      url:string,
      alt:string
    },
    image:{
      url:string,
      alt:string
    },
    routeLink: string;
}

