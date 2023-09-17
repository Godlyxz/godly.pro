import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';
  name: string = 'امیر'
  namekh: string = 'خلیلیان'
  email: string = 'abolfazlwsps@gmail.com'
  number: string = '0999999999'
  daneshjooyan: { namee: string, nameKh: string, numbeerr: string, address: string }[] = [
    {
      namee: 'ali',
      nameKh: 'abbasi',
      numbeerr: '9337136315',
      address: 'hamedan'
    },
    {
      namee: 'mmd',
      nameKh: 'mmdi',
      numbeerr: '8134231107',
      address: 'tehran'
    },
    {
      namee: 'reza',
      nameKh: 'rezaei',
      numbeerr: '433434435',
      address: 'mashhad'
    }
  ]
  car: { type: string, model: string, year: number }[] = [
    {
      type: 'toyota',
      model: 'corola',
      year: 2008
    },
    {
      type: 'lexus',
      model: 'cor',
      year: 2121
    }

  ]
  moshakhasat: { name: string, namekh: string, email: string, number: string }[] = [
    {
      name: 'amir',
      namekh: 'amirkh',
      number: '0999999999',
      email: 'abolfazlwsps@gmail.com'
    },
    {
      name: 'alireza',
      namekh: 'rezaii',
      number: '13131313131',
      email: 'alidafaf@gmail.com'
    }
  ]
  moshakhasat1: { name: string, namekh: string, email: string, number: string } =
    {
      name: 'امیر',
      namekh: 'خلیلیان',
      number: '0999999999',
      email: 'abolfazlwsps@gmail.com'
    }
  adad: { adad1: number, adad2: number } = {
    adad1: 40,
    adad2: 68688686
  }
  mariza : {patient : string , status : string , apoointment:any , phnoe:string , doctor : string , actins : boolean}[]=[
    {
      patient:'kiran ancharia',
      status: 'consult',
      apoointment:'06:00 PM',
      phnoe : '9876543215' ,
      doctor : 'dr.anneth',
      actins: true
    },
    {
      patient:'sandeep hedge',
      status: 'consult',
      apoointment:'06:15 PM',
      phnoe : '9876543215' ,
      doctor : 'dr.anneth',
      actins: true
    },
    {
      patient:'john doe',
      status: 'consult',
      apoointment:'06:30 PM',
      phnoe : '9876543215' ,
      doctor : 'dr.anneth',
      actins: true
    },
    {
      patient:'vishwanath',
      status: 'consult',
      apoointment:'06:45 PM',
      phnoe : '9876543215' ,
      doctor : 'dr.anneth',
      actins: true
    }
    ]

  jam(adad1: number, adad2: number) {
    return adad1 + adad2
  }

  mahsool(gheimat: number) {
    if (gheimat < 1000000) {
      return (gheimat)
    } else if (gheimat > 1000000 && gheimat < 5000000) {
      return gheimat - (gheimat * 0.23);
    } else if (gheimat > 5000000 && gheimat < 10000000) {
      return gheimat - (gheimat * 0.2);
    } else {
      return gheimat - (gheimat * 0.05);
    }
  }

  lop(hq: number) {
    if (hq < 1000) {
      return (hq - 100);
    } else {
      return (hq)
    }
  }

  nm(meghdar1: any, meghdar2: any, meghdar3: any) {
    if (typeof meghdar1 != "number" || typeof meghdar2 != "number" || typeof meghdar3 != "number") {
      return (console.log("eror"))
    } else if (meghdar3 === meghdar2 && meghdar3 === meghdar1) {
      return (console.log("barabar"));
    } else if (meghdar1 > meghdar2 && meghdar2 > meghdar3) {
      return (meghdar1);
    } else if (meghdar2 > meghdar1 && meghdar2 > meghdar3) {
      return (meghdar2);
    } else if (meghdar3 > meghdar2 && meghdar3 > meghdar1) {
      return (meghdar3);
    } else if (meghdar1 > meghdar2 && meghdar1 > meghdar3 || meghdar2 === meghdar3) {
      return (meghdar1);
    } else if (meghdar2 > meghdar1 && meghdar1 || meghdar3) {
      return meghdar2;
    } else if (meghdar3 > meghdar1 && meghdar3 > meghdar2 || meghdar2 === meghdar1) {
      return (meghdar3);
    } else {
      return console.log("eror")
    }
  }

  lol: string[] = ["ali", "mmd", "ho3ein"]

  lol2() {
    for (let i = 0;i > this.lol.length; i++)
      console.log(this.lol[i])
  }

  kio: number = 13

  mio(adad11: number) {
    this.kio += adad11
  }

  pp: boolean = false;

  pr() {
    this.pp = !this.pp
  }

  kaa : any = ['/','e','12','13','23']


  action(){
    return console.log(this.mariza[0])
  }

  constructor() {
    console.log(this.jam(this.adad.adad1, this.adad.adad2))
    console.log(this.mahsool(200000))
    console.log(this.lop(333))
    console.log(this.nm(23, 23, 23))
    console.log(this.lol2())
  }


}
