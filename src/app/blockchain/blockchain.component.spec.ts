import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { BlockchainComponent } from './blockchain.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpService, MobileNavState } from './../services/http.service'
import { CookieService } from 'ngx-cookie-service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { PipesModule } from '../pipes/pipes.module'

describe('BlockchainComponent', () => {
    let component: BlockchainComponent
    let fixture: ComponentFixture<BlockchainComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BlockchainComponent],
            providers: [MobileNavState, HttpService, CookieService],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                PipesModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockchainComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should be created', () => {
        expect(component).toBeTruthy()
    })
})
