import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
        <hr/>
        <div class="well hoverwell thumbnail">
            <div class="row">
                <h2 class="col-md-10">{{event.name}}</h2>
                <img class="col-md-2 myimg" src={{event.imageUrl}} />
            </div>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: \${{event.price}}</div>
            <div>
                <span>Location: {{event.location.address}}</span>
                <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
            </div>
        </div>
    `,
    styles: [`
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb;}
        .myimg {
            border-radius: 50%;
            height: 60px;
            width: 90px;
            display: block;
        }
    `]
})

export class EventThumbnailComponent {
    @Input() event:any
    someProperty: string = "some value"
    logCityEvent () {
        console.log(this.event.location.city)
    }
}
