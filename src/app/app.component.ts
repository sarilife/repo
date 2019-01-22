import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    socket: WebSocket;
    ngOnInit(): void {
        this.setServerSocket();
    }

    setServerSocket() {

        this.socket = new WebSocket('ws://127.0.0.1:1234');
        console.log("aa")
        this.socket.onopen = () => {
            console.log('WebSockets connection created.');
            this.socket.send("aa");
            this.socket.send("aa");
            this.socket.send("aa");
            this.socket.send("aa");

        };

        this.socket.onmessage = (event) => {

            //  console.log("data from socket:" + event.data);
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

        if (this.socket.readyState == WebSocket.OPEN) {
            this.socket.onopen(null);
        }

    }
    title = 'app';

}
