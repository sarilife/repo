import { Component, OnInit } from '@angular/core';
import { BidItemService } from './shared/services/biditem.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(public bidItemService: BidItemService) {

    }
    socket: WebSocket;
    ngOnInit(): void {
        this.setServerSocket();
    }

    setServerSocket() {

        this.bidItemService.socket = new WebSocket('ws://127.0.0.1:1234');
        console.log("aa")
        this.bidItemService.socket.onopen = () => {
            console.log('WebSockets connection created.');
            this.bidItemService.socket.send("aa");
            // this.socket.send("aa");
            // this.socket.send("aa");
            // this.socket.send("aa");

        };

        this.bidItemService.socket.onmessage = (event) => {
            this.bidItemService.refreshList();
            console.log("data from socket:" + event.data);
            //  this.num = event.data;
            //  console.log(event.data)
            //  if(event.data == "127.0.0.1 - -1")
            //  {
            //    console.log("back")
            //   this.Swiper.slidePrev()

            // }
            // else if (event.data == "127.0.0.1 - 1")
            // {
            //   console.log("hi")
            //   this.Swiper.slideNext()

            //  }
        };

        if (this.bidItemService.socket.readyState == WebSocket.OPEN) {
            this.bidItemService.socket.onopen(null);
        }

    }
    title = 'app';

}
