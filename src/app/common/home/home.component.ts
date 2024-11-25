import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { ServiceComponent } from "../service/service.component";
import { FeatureComponent } from "../feature/feature.component";
import { TeamComponent } from "../team/team.component";
import { AboutComponent } from "../about/about.component";
import { ProjectComponent } from "../project/project.component";
import { CalltoactionComponent } from "../calltoaction/calltoaction.component";
import { PricingComponent } from "../pricing/pricing.component";
import { BlogComponent } from "../blog/blog.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ServiceComponent, FeatureComponent, TeamComponent, AboutComponent, ProjectComponent, CalltoactionComponent, PricingComponent, BlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
