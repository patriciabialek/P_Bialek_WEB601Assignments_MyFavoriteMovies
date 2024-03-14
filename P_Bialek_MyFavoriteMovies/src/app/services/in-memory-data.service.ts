import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { contentArray } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    //setting it to the value of our array of content
    const content = [
      {id: 1, 
        title: "Coraline", 
        description: "Coraline is a darkly enchanting animated fantasy film that follows a curious young girl's discovery of a parallel world with seemingly perfect but sinister counterparts to her real-life parents, leading her on a suspenseful and eerie adventure.", 
        creator: "Henry Selick", 
        imgURL: "https://upload.wikimedia.org/wikipedia/en/3/36/Coraline_poster.jpg", 
        type: "Fantasy", 
        tags: ["Coraline", "OtherMother", "LittleDoor"],
      },
      {
        id: 2, 
        title: "Shrek 2", 
        description: "Shrek 2 is an animated comedy sequel that follows the ogre Shrek and his newlywed wife Fiona as they embark on a hilarious and adventurous journey to meet her royal parents, encountering charmingly quirky characters and unexpected challenges along the way.", 
        creator: "Andrew Adamson", 
        imgURL: "https://m.media-amazon.com/images/I/71PM3ZsLZaL._AC_UF1000,1000_QL80_.jpg", 
        type: "Comedy", 
        tags: ["Ogre", "Donkey", "FairyGodMother"],
      },
      {
        id: 3, 
        title: "Eternal Sunshine of the Spotless Mind", 
        description: "Eternal Sunshine of the Spotless Mind is a poignant and innovative romantic drama that explores the complexities of love and memory as a couple undergoes a procedure to erase each other from their minds, only to rediscover the profound impact of their connection.", 
        creator: "Michel Gondry", 
        imgURL: "https://m.media-amazon.com/images/I/71G7AybM3qL._AC_UF894,1000_QL80_.jpg", 
        type: "Sci-Fi", 
        tags: ["Clementine", "MindControl", "Romance"],
      },
      {
        id: 4, 
        title: "Sinister", 
        description: "Sinister is a chilling horror film that unfolds a true-crime writer's descent into terror as he investigates a series of disturbing home movies, discovering a malevolent supernatural force that threatens his family.", 
        creator: "Scott Derrickson", 
        imgURL: "https://m.media-amazon.com/images/I/81mfiTrZsFL._AC_UF1000,1000_QL80_.jpg", 
        type: "Horror", 
        tags: ["Films", "Crime", "Bughuul"],
      },
      {
        id: 5, 
        title: "Showgirls", 
        description: "Showgirls is a provocative and controversial drama that follows the ambitious journey of a young dancer in Las Vegas as she navigates the cutthroat world of entertainment, exposing the glamorous facade and dark underbelly of the showbiz industry.", 
        creator: "Paul Verhoeven", 
        imgURL: "https://m.media-amazon.com/images/M/MV5BNzcyMjExNjg3OF5BMl5BanBnXkFtZTgwOTY4Mjc1MDE@._V1_.jpg", 
        type: "Drama", 
        tags: ["Dancers", "Nomi", "LasVegas"],
      },
      {
        id: 6, 
        title: "Black Swan", 
        description: "Black Swan is a psychological thriller that delves into the intense and haunting transformation of a talented but fragile ballet dancer as she spirals into a dark and surreal world of obsession and self-discovery.", 
        creator: "Darren Aronofsky", 
        imgURL: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8236892_v_v10_ar.jpg", 
        type: "Thriller", 
        tags: ["Ballet", "SwanLake", "Obessive"],
      },
      {
        id: 7, 
        title: "Whiplash", 
        description: "Whiplash is an intense psychological drama that follows the tumultuous relationship between an ambitious young jazz drummer and his abusive music instructor as they push each other to the brink of obsession and excellence.", 
        creator: "Damien Chazelle", 
        imgURL: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10488558_p_v12_ai.jpg", 
        type: "Drama", 
        tags: ["Drums", "Instructor", "Music"],
      },
      {
        id: 8, 
        title: "Pulp Fiction", 
        description: "Pulp Fiction is a stylish and unconventional crime film that weaves together multiple interconnected stories of mobsters, hitmen, and other colorful characters in a non-linear narrative, creating an iconic and genre-defying cinematic experience.", 
        creator: "Quentin Tarantino",  
        tags: ["Mobsters", "Hitmen", "Crime"],
      },
    ];
    return {content};
  }

  //take the CONTENT we defined in our contentDb file previously and move the values to this service
  genId(content: Content[]): number{
    return content.length > 0 ? Math.max(...content.map(c => c.id ?? 0)) + 1 : 1;
  }

  constructor() { }
}
