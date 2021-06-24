import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";

import { Job } from "../../models/jobs";

@Component({
  selector: "app-porfolio",
  templateUrl: "./porfolio.component.html",
  styleUrls: ["./porfolio.component.scss"],
})
export class PorfolioComponent implements OnInit {
  job: Job[];

  constructor() {
    // this.job = {
    //   name: "chevy",
    //   year: 1957,
    //   image: "",
    // };
  }

  ngOnInit(): void {
    this.job = [
      {
        name: "13b",
        model: "RX7",
        year: 87,
        image: "../../../assets/img/13b.jpg",
      },
      {
        name: "Carberators",
        model: "mixed",
        year: 87 - 90,
        image: "../../../assets/img/carberators.jpg",
      },
      {
        name: "Mustang",
        model: "Shelby",
        year: 87,
        image: "../../../assets/img/mustang.jpg",
      },
      {
        name: "Third Generation",
        model: "RX7",
        year: 87,
        image: "../../../assets/img/jt.jpg",
      },
      {
        name: "Rebuild",
        model: "Big Block",
        year: 87,
        image: "../../../assets/img/rebuild.jpg",
      },
      {
        name: "13b",
        model: "RX7",
        year: 87,
        image: "../../../assets/img/rotory.jpg",
      },
      {
        name: "Custom Manifold",
        model: "RX7",
        year: 87,
        image: "../../../assets/img/manifold.jpg",
      },
      {
        name: "Heads",
        model: "LS",
        year: 2005,
        image: "../../../assets/img/porting.jpg",
      },
      {
        name: "Pontiac",
        model: "GTO",
        year: 87,
        image: "../../../assets/img/green.jpg",
      },
    ];
  }
}
