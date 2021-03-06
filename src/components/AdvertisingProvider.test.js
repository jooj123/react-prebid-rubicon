import React from 'react';
import expectSnapshot from '@mt-testutils/expect-snapshot';
import AdvertisingProvider from './AdvertisingProvider';
import { stub, spy } from 'sinon';
import { mount } from 'enzyme';
import { config } from '../utils/testAdvertisingConfig';

const mockActivate = spy();
const mockSetup = spy();
const mockTeardown = spy();
const mockConstructor = spy();
const mockValueSpy = spy();
const mockIsConfigReady = stub().returns(true);
const mockIsConfigNotReady = stub().returns(false);
const mockSetConfig = spy();

jest.mock('../AdvertisingContext', () => ({
    // eslint-disable-next-line react/prop-types
    Provider({ value, children }) {
        mockValueSpy(value);
        return <div id="advertising-context-provider">{children}</div>;
    }
}));

jest.mock(
    '../Advertising',
    () =>
        class {
            constructor(...args) {
                mockConstructor(...args);
            }
            activate(...args) {
                mockActivate(...args);
            }
            setup(...args) {
                mockSetup(...args);
            }
            teardown(...args) {
                mockTeardown(...args);
            }
            isConfigReady() {
                return mockIsConfigReady();
            }
            isConfigNotReady() {
                return mockIsConfigNotReady();
            }
            setConfig(...args) {
                mockSetConfig(...args);
            }
        }
);

describe('The AdvertisingProvider component', () => {
    it('renders correctly', () =>
        expectSnapshot(
            <AdvertisingProvider config={config}>
                <h1>hello</h1>
            </AdvertisingProvider>
        ));
    describe('when mounted', () => {
        beforeEach(() => mount(<AdvertisingProvider config={config} />));
        it('constructs an Advertising module with the provided configuration', () =>
            void mockConstructor.should.have.been.calledWith(config));
        it('sets up the Advertising module', () => void mockSetup.should.have.been.called);
        it('uses an AdvertisingContext.Provider to pass the activate method of the advertising module', () =>
            expect(mockValueSpy.firstCall.args[0]).toMatchSnapshot());
        afterEach(resetMocks);
    });
    describe('when mounted with active = false', () => {
        beforeEach(() => mount(<AdvertisingProvider config={config} active={false} />));
        it('constructs an Advertising module with the provided configuration', () =>
            void mockSetup.should.not.have.been.called);
        afterEach(resetMocks);
    });
    describe('componentDidUpdate', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = mount(<AdvertisingProvider config={config} />);
            wrapper.setProps({ config: { config } });
        });
        it('constructs an Advertising module with the provided configuration', () => {
            wrapper.setState({
                firstCall: false,
                shouldRefresh: true,
                advertising: {
                    setup: mockSetup,
                    setConfig: mockSetConfig,
                    isConfigReady: mockIsConfigNotReady,
                    activate: mockActivate,
                    teardown: mockTeardown
                }
            });
            wrapper.update();
            void mockSetConfig.should.have.been.calledWith({ config });
            void mockConstructor.should.have.been.calledWith(config);
            void mockSetup.should.have.been.called;
        });
        it('sets up the Advertising module', () => {
            wrapper.setState({
                firstCall: false,
                shouldRefresh: true,
                advertising: {
                    setup: mockSetup,
                    setConfig: mockSetConfig,
                    isConfigReady: mockIsConfigReady,
                    activate: mockActivate,
                    teardown: mockTeardown
                }
            });
            wrapper.update();
            void mockSetConfig.should.have.been.calledWith({ config });
            void mockSetup.should.have.been.called;
        });
        it('uses an AdvertisingContext.Provider to pass the activate method of the advertising module', () =>
            expect(mockValueSpy.firstCall.args[0]).toMatchSnapshot());
        afterEach(resetMocks);
    });
    describe('when mounted with active = false', () => {
        beforeEach(() => {
            const wrapper = mount(<AdvertisingProvider config={config} active={false} />);
            wrapper.setProps({ active: false });
            wrapper.update();
        });
        it('constructs an Advertising module with the provided configuration', () =>
            void mockSetup.should.not.have.been.called);
        afterEach(resetMocks);
    });
    describe('when unmounted', () => {
        let component, componentWillUnmount;
        beforeEach(() => {
            component = mount(<AdvertisingProvider config={config} />);
            component.setState({
                advertising: {
                    isConfigReady: mockIsConfigReady,
                    activate: mockActivate,
                    teardown: mockTeardown
                }
            });
            componentWillUnmount = jest.spyOn(component.instance(), 'componentWillUnmount');
            component.unmount();
        });
        it('unmount Advertising module with the provided configuration', () => {
            expect(componentWillUnmount).toHaveBeenCalled();
        });
        it('teardown up the Advertising module', () => {
            void mockTeardown.should.have.been.called;
        });
        afterEach(resetMocks);
    });
    describe('when unmounted', () => {
        let component, componentWillUnmount;
        beforeEach(() => {
            component = mount(<AdvertisingProvider />);
            component.setState({ advertising: { isConfigReady: mockIsConfigReady, activate: mockActivate } });
            componentWillUnmount = jest.spyOn(component.instance(), 'componentWillUnmount');
            component.unmount();
        });
        it('unmount Advertising module with the provided configuration', () => {
            expect(componentWillUnmount).toHaveBeenCalled();
        });
        it('teardown up the Advertising module', () => {
            void mockTeardown.should.not.have.been.called;
        });
        afterEach(resetMocks);
    });
    describe('when getDerivedStateFromProps', () => {
        it('should not called update', () => {
            const givenProps = { config: 'test1' };
            const givenState = { advertising: { prevConfig: 'test1' } };
            const result = AdvertisingProvider.getDerivedStateFromProps(givenProps, givenState);
            expect(result).toEqual({ shouldRefresh: false });
        });
        it('should called update', () => {
            const givenProps = { active: true, shouldRefresh: true, config: 'test1' };
            const givenState = {
                shouldRefresh: true,
                firstCall: false,
                advertising: {
                    isConfigReady: mockIsConfigReady,
                    teardown: mockTeardown,
                    prevConfig: 'test2'
                }
            };
            const result = AdvertisingProvider.getDerivedStateFromProps(givenProps, givenState);
            expect(result).to.have.property('shouldRefresh');
            expect(result).to.have.property('advertising');
            expect(result.shouldRefresh).toBe(true);
            void mockTeardown.should.have.been.called;
            void mockConstructor.should.have.been.called;
            void mockSetup.should.have.been.called;
        });
    });
});

function resetMocks() {
    mockConstructor.resetHistory();
    mockSetup.resetHistory();
    mockTeardown.resetHistory();
    mockActivate.resetHistory();
    mockValueSpy.resetHistory();
}
