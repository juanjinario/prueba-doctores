import { animate, query, keyframes, state, style, transition, trigger, stagger, group } from '@angular/animations';


export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [style({ opacity: 0 }), animate('0.4s ease-in', style({ opacity: 1 }))]),
    transition(':leave', [animate('0.4s 10ms ease-out', style({ opacity: 0 }))])
])

//Por revisar el translate3D 
export const slideInOut = trigger('slideInOut', [
    transition(':increment', [animate('0.4s 10ms ease-out', style({ opacity: .90 }))]),
    transition(':decrement', [animate('0.4s 10ms ease-out', style({ opacity: .90 }))])
])


export const moveLeftRight = trigger('moveLeftRight', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('900ms', [
            animate('.6s ease-in', keyframes([
                style({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
                style({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
            ]))]), { optional: true })
        ,
        query(':leave', stagger('900ms', [
            animate('.6s ease-out', keyframes([
                style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                style({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
                style({ opacity: 0, transform: 'translateX(-75%)', offset: 1.0 }),
            ]))]), { optional: true })
    ])
])


//Aparecen los elementos de abajo hacia arriba y se van en sentido contrario, se aplica al padre de los elementos 
export const moveUpDown = trigger('moveUpDown', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
            animate('.6s ease-in', keyframes([
                style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
            ]))]), { optional: true })
        ,
        query(':leave', stagger('300ms', [
            animate('.6s ease-out', keyframes([
                style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
            ]))]), { optional: true })
    ])
])

export function flyInOut(duration: number = 0.2) {
    return trigger('flyInOut', [
        state('in', style({ opacity: 1, transform: 'translateX(0)' })),
        transition('void => *', [style({ opacity: 0, transform: 'translateX(-100%)' }), animate(`${duration}s ease-in`)]),
        transition('* => void', [animate(`${duration}s 10ms ease-out`, style({ opacity: 0, transform: 'translateX(100%)' }))])
    ])
}