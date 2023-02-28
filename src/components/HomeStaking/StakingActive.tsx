import React, {forwardRef, useImperativeHandle, useRef} from 'react';

import {View} from 'react-native';

import {InfoBlockAmount, Inline, Spacer, Text} from 'src/components/ui';
import {cleanNumber} from 'src/helpers/CleanNumber';
import {Color} from 'src/themeTypes';

interface StakingActiveProps {
  availableSum: number;
  rewardSum: number;
  stakedSum: number;
  unDelegationSum: number;
}

export interface StakingActiveInterface {
  getReward: () => void;
}

export const StakingActive = forwardRef(
  (
    {availableSum, rewardSum, stakedSum, unDelegationSum}: StakingActiveProps,
    ref,
  ) => {
    const isEndRef = useRef<Boolean>(false);

    useImperativeHandle(ref, () => ({
      getReward() {
        isEndRef.current = false;
      },
    }));

    return (
      <View>
        <Spacer height={23} />
        <Text t12 center color={Color.textBase2}>
          Stake your cryptocurrency in any validator and get additional
          cryptocurrency
        </Text>
        <Spacer height={36} />
        <Spacer height={20} />
        <Text t6 center>
          Rewards
        </Text>
        <Text t2 center color={Color.primary}>
          {cleanNumber(rewardSum)} Coins
        </Text>
        <Spacer height={28} />
        <InfoBlockAmount
          isLarge
          amountColor={Color.primary}
          value={stakedSum}
          text={'Staked'}
        />
        <Spacer height={12} />
        <Inline gap={12}>
          <InfoBlockAmount value={availableSum} text={'Available'} />
          <InfoBlockAmount value={unDelegationSum} text={'Unbounded'} />
        </Inline>
        <Spacer height={20} />
      </View>
    );
  },
);
