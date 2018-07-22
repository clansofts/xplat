import { NgModule, Optional, SkipSelf } from '@angular/core';

// nativescript
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { device } from 'tns-core-modules/platform';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

// libs
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CoreModule, PlatformLanguageToken, WindowPlatformService } from '@<%= npmScope %>/core';<% if (sample) { %>
import { ITEM_PROVIDERS } from '@<%= npmScope %>/features';<% } %>
import { throwIfAlreadyLoaded } from '@<%= npmScope %>/utils';

// app
import { PROVIDERS } from './services';
import { TNSWindowPlatformService } from './services/tns-window.service';
import { TNSTranslateLoader } from './services/tns-translate.loader';

// factories
export function platformLangFactory() {
  return device.language;
}

export function createTranslateLoader() {
  return new TNSTranslateLoader('/assets/i18n/');
}

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    TNSFontIconModule.forRoot({
      fa: './assets/fontawesome.min.css'
    }),
    CoreModule.forRoot([
      {
        provide: PlatformLanguageToken,
        useFactory: platformLangFactory
      },
      {
        provide: WindowPlatformService,
        useClass: TNSWindowPlatformService
      }
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader
      }
    }),
  ],
  providers: [
    ...PROVIDERS<% if (sample) { %>,
    ...ITEM_PROVIDERS<% } %>
  ]
})
export class <%= utils.classify(prefix) %>CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: <%= utils.classify(prefix) %>CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, '<%= utils.classify(prefix) %>CoreModule');
  }
}