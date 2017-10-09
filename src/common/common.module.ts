import { Type, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * PIPES
 */

import { MCapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { MTrimPipe } from './pipes/trim/trim.pipe';
import { MTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { MTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';

const M_PIPES: Array<Type<any>> = [
  MCapitalizePipe,
  MTrimPipe,
  MTimeAgoPipe,
  MTimeDifferencePipe,
];

export { MTimeAgoPipe };

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        M_PIPES,
    ],
    exports: [
        M_PIPES
    ]
})
export class MallorcaCommonModule {

    /**
     * Use in AppModule, new instance of services
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: MallorcaCommonModule
        };
    }

    /**
     * Use in features modules with lazy loading: New instance of services
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: MallorcaCommonModule
        };
    }

}
