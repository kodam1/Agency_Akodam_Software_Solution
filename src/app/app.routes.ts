import { Routes } from '@angular/router';
import { AboutComponent } from './common/about/about.component';
import { HomeComponent } from './common/home/home.component';
import { ServiceComponent } from './common/service/service.component';
import { BlogComponent } from './common/blog/blog.component';
import { TeamComponent } from './common/team/team.component';
import { PricingComponent } from './common/pricing/pricing.component';
import { HeaderComponent } from './common/header/header.component';
import { BannerComponent } from './common/banner/banner.component';
import { FeatureComponent } from './common/feature/feature.component';
import { ProjectComponent } from './common/project/project.component';
import { CalltoactionComponent } from './common/calltoaction/calltoaction.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavAboutComponent } from './common/nav-about/nav-about.component';
import { NavTeamSingleComponent } from './common/nav-team-single/nav-team-single.component';
import { NavTeamComponent } from './common/nav-team/nav-team.component';
import { NarCarrerDetailsComponent } from './common/nar-carrer-details/nar-carrer-details.component';
import { CarrerComponent } from './common/carrer/carrer.component';
import { NarFaqsComponent } from './common/nar-faqs/nar-faqs.component';
import { NarContactComponent } from './common/nar-contact/nar-contact.component';
import { NavServicesComponent } from './common/nav-services/nav-services.component';
import { NavBlogComponent } from './common/nav-blog/nav-blog.component';
import { NavBlogSingleComponent } from './common/nav-blog-single/nav-blog-single.component';
import { NarPricingComponent } from './common/nar-pricing/nar-pricing.component';

export const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'services', component: ServiceComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'team', component: TeamComponent },
  {path: 'pricing', component: PricingComponent },
  {path: 'header', component: HeaderComponent },
  {path: 'banner', component: BannerComponent },
  {path: 'feature', component: FeatureComponent },
  {path: 'project', component: ProjectComponent },
  {path: 'calltoaction', component: CalltoactionComponent },
  {path: 'footer', component: FooterComponent },

  {path: 'nav-about', component: NavAboutComponent },
  {path: 'nav-services', component: NavServicesComponent },
  {path: 'nav-blog', component: NavBlogComponent },
  {path: 'nav-team', component: NavTeamComponent },
  {path: 'nav-team-single', component: NavTeamSingleComponent },
  {path: 'nav-career', component: CarrerComponent },
  {path: 'career-single-detials', component: NarCarrerDetailsComponent },
  {path: 'nav-blog-single', component: NavBlogSingleComponent },
  {path: 'nav-pricing', component: NarPricingComponent },
  {path: 'nav-faqs', component: NarFaqsComponent },
  {path: 'nav-contact', component: NarContactComponent },




];
