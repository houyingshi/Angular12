//导入依赖
import { Component, OnInit } from '@angular/core';

//通过注解声明控件的选择器和相关的文件url
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})

//组件的数据模型
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
